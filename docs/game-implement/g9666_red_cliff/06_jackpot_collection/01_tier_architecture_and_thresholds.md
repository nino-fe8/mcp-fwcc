---
id: "game-implement:9666:jackpot:tiers"
title: "Red Cliff (g9666) Jackpot Tier Architecture & Thresholds"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "jackpot_tiers", "data_schema", "token_meters"]
---

# 💎 Red Cliff (g9666) Jackpot Tier Architecture & Thresholds

<!-- convention-summary-start -->
### Red Cliff (g9666) Jackpot Tier Architecture & Thresholds Summary

- **Core Architecture / Purpose**: Detailed technical specification of the 4-Tier Troop Token Jackpot collection schema in Red Cliff (g9666).
- **Key Mechanisms & Design**: Covers `collectSymbols` data parsing, sprite frame mappings, tier thresholds (Mini: 6, Minor: 9, Major: 12, Grand: 15), and hero-to-jackpot bindings.
- **Domain Capabilities**: game_implement, 06_jackpot_collection
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionData9666.ts`
- **Related Docs**: [02_token_meter_ui_and_fly_in.md](./02_token_meter_ui_and_fly_in.md), [03_smart_resume_deduction_math.md](./03_smart_resume_deduction_math.md)
<!-- convention-summary-end -->

---

## 1. Jackpot Tiers & Hero Token Bindings

In Red Cliff (Đại Chiến Xích Bích), the player recruits legendary Shu generals to assemble the grand army ("Chiêu Binh Mãi Mã"):

| Tier Index | Jackpot Tier | Hero Token Symbol | General Asset / Name | Target Tokens | Payout Multiplier |
| :---: | :---: | :---: | :--- | :---: | :---: |
| **0** | **Mini** | `S4` | Triệu Vân (Zhao Yun) | **6 Tokens** | $20\times$ Total Bet |
| **1** | **Minor** | `S3` | Trương Phi (Zhang Fei) | **9 Tokens** | $50\times$ Total Bet |
| **2** | **Major** | `S2` | Lưu Bị (Liu Bei) | **12 Tokens** | $200\times$ Total Bet |
| **3** | **Grand** | `S1` | Quan Vũ (Guan Yu) | **15 Tokens** | $1,000\times$ Total Bet |

---

## 2. Network Payload Schema (`collectSymbols`)

The server communicates current progress via an array of compact colon-delimited strings within `joinGameData` or spin responses:
```json
{
  "collectSymbols": [
    "S4:3:6",
    "S3:5:9",
    "S2:11:12",
    "S1:14:15"
  ]
}
```

### Parsing Pipeline
In [`JackpotCollectionData9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionData9666.ts):
```typescript
export interface SymbolCollectInfo {
    symbolCode: string;
    collected: number;
    required: number;
}

getCollectInfoList(customRawList?: string[]): SymbolCollectInfo[] {
    const rawList = customRawList || this["collectSymbols"] || [];
    const result: SymbolCollectInfo[] = [];

    for (const item of rawList) {
        if (typeof item === 'string') {
            const parts = item.split(':');
            if (parts.length >= 3) {
                const symbolCode = parts[0];
                const collected = parseInt(parts[1], 10) || 0;
                const required = parseInt(parts[2], 10) || 0;
                result.push({ symbolCode, collected, required });
            }
        }
    }
    return result;
}
```

---

## 3. UI Prefab Instantiation & Mapping

In [`JackpotCollectionModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts):
- For each `SymbolCollectInfo` item in `initData`:
  1. Instantiates `itemPrefab` (`cc.instantiate(this.itemPrefab)`).
  2. Appends to `itemContainer`.
  3. Retrieves `spriteFrame` for the hero token via `JackpotCollectionConfig9666.symbolSpriteMappings`.
  4. Calls `itemComp.init(info, spriteFrame)` on [`JackpotCollectionItem9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionItem9666.ts).
