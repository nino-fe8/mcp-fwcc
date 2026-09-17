---
id: "game-implement:9666:jackpot:smart_resume_math"
title: "Red Cliff (g9666) Jackpot Collection Smart Resume Deduction Algorithm"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "smart_resume", "deduction_math", "reconnect", "traceWay", "paylines"]
---

# 🧮 Red Cliff (g9666) Jackpot Smart Resume Deduction Algorithm

<!-- convention-summary-start -->
### Red Cliff (g9666) Jackpot Smart Resume Deduction Algorithm Summary

- **Core Architecture / Purpose**: Exhaustive mathematical and procedural analysis of the client-side token count deduction algorithm on game reconnect / reload.
- **Key Mechanisms & Design**: Resolves server-state desynchronization when reconnecting mid-round by parsing `traceWay`, `winningSymbolIds`, and AllWays paylines to accurately back-calculate pre-spin token totals.
- **Domain Capabilities**: game_implement, 06_jackpot_collection
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts`
- **Related Docs**: [01_tier_architecture_and_thresholds.md](./01_tier_architecture_and_thresholds.md), [02_token_meter_ui_and_fly_in.md](./02_token_meter_ui_and_fly_in.md)
<!-- convention-summary-end -->

---

## 1. The Reconnection Synchronization Dilemma

### The Problem
When a player spins and disconnects mid-animation, the backend database has **already** committed the round's winnings:
- The server's `joinGameData.dataResume.collectSymbols` returns the **final, post-spin** collection count (e.g. `S1:15:15`).
- However, when the client frontend resumes the game, the game state machine must play out the spin's winning paylines and particle collection animations from the start.
- If the frontend directly initialized the HUD meters to `15/15`, when the winning payline particles fly in, the meter would either show nothing or overflow past the maximum threshold!

### The Solution: Smart Resume Deduction
The frontend calculates:
$$C_{\text{before}} = \max(0, C_{\text{server}} - W_{\text{current\_spin}})$$
This ensures the HUD meter initially displays $C_{\text{before}}$, allowing the incoming winning symbols to naturally animate the progress bar up to $C_{\text{server}}$.

---

## 2. Exhaustive Step-by-Step Algorithm Breakdown

From [`JackpotCollectionModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts):

```mermaid
flowchart TD
    Start([onJoinGameSuccess Event]) --> Extract[Extract resumeData.collectSymbols]
    Extract --> HasPaylines{resumeData has paylines?}
    
    HasPaylines -- No --> DirectInit[initItems with server counts]
    HasPaylines -- Yes --> ParsePaylines[Parse AllWays winningSymbolIds]
    
    ParsePaylines --> ScanTraceWay[Scan traceWay indices in rawMatrix]
    ScanTraceWay --> FoundInTrace{Found matching symbols in traceWay?}
    
    FoundInTrace -- Yes --> CountTrace[Count = matching symbols in traceWay including Wilds]
    FoundInTrace -- No --> CountPayline[Count = sum of reelCount from parsedPaylines]
    
    CountTrace --> Deduct[C_before = Math.max(0, collected - count)]
    CountPayline --> Deduct
    Deduct --> InitAdjusted[initItems with adjusted before-spin list]
```

### 2.1 Code Implementation
```typescript
private onJoinGameSuccess(data: any): void {
    const joinGameData = data?.joinGameData;
    const resumeData = joinGameData?.dataResume || data?.dataResume;
    const rawList = resumeData?.collectSymbols || joinGameData?.collectSymbols;

    if (!rawList) return;

    const paylines = resumeData?.freeGamePayLines || resumeData?.paylines || resumeData?.normalGamePayLines;
    if (resumeData && paylines && paylines.length > 0) {
        const paylineCounts: Record<string, number> = {};
        const parsedPaylines = eno.SlotUtils?.convertPayLineAllWays ? eno.SlotUtils.convertPayLineAllWays(paylines) : paylines;
        const winningSymbolIds = new Set<string>();

        // Step 1: Identify all symbols that participated in winning combinations
        for (const pl of parsedPaylines) {
            const sym = pl.symbolId || pl.symbolName || pl.symbolCode || pl.symbol;
            if (sym) winningSymbolIds.add(String(sym).trim());
        }

        const rawMatrix = resumeData.freeGameMatrix || resumeData.normalGameMatrix || resumeData.matrix || [];
        const traceWay: number[] = resumeData.traceWay || [];

        // Step 2: Calculate exact symbol count contributed by this spin
        winningSymbolIds.forEach((symId) => {
            let count = 0;
            if (traceWay && traceWay.length > 0 && rawMatrix.length > 0) {
                traceWay.forEach((idx: number) => {
                    const sym = rawMatrix[idx];
                    if (sym) {
                        const cleanSym = String(sym).split('_')[0];
                        if (cleanSym === symId || cleanSym.startsWith('K')) {
                            count++;
                        }
                    }
                });
            }

            // Fallback to payline reelCount if traceWay is omitted
            if (count === 0) {
                for (const pl of parsedPaylines) {
                    const sym = String(pl.symbolId || pl.symbolName || pl.symbolCode || pl.symbol || '').trim();
                    if (sym === symId) {
                        count += (pl.reelCount || 1);
                    }
                }
            }

            paylineCounts[symId] = count;
        });

        // Step 3: Compute adjusted list for initial HUD render
        const adjustedList = rawList.map((item: string) => {
            if (typeof item !== 'string') return item;
            const parts = item.split(':');
            if (parts.length >= 3) {
                const symbolCode = parts[0];
                const collected = parseInt(parts[1], 10) || 0;
                const required = parseInt(parts[2], 10) || 0;
                const currentWinCount = paylineCounts[symbolCode] || 0;
                const beforeCollect = Math.max(0, collected - currentWinCount);
                return `${symbolCode}:${beforeCollect}:${required}`;
            }
            return item;
        });

        this.initItems(adjustedList);
        return;
    }

    this.initItems(rawList);
}
```
