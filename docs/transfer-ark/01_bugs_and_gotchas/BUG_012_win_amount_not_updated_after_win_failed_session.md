---
id: "transfer-ark:bugfix:win_amount_not_updated_after_win_failed_session"
title: "BUG-012: Win Amount from Win Failed Session Not Credited to Wallet"
category: "bugfix"
game_ids: ["g9666", "all"]
sdk_modules: ["WalletModule", "WalletLabel", "WalletLabel9666", "GameModeDirectorModule", "NormalGameDirectorModule9666", "WalletManager"]
tags: ["wallet", "win_failed", "scenario_wallet", "fault_injection", "http_500", "isPaused", "reconciliation", "pending_transaction", "discrepancy_item_56", "g9666", "ark_business"]
created_at: "2026-09-07"
author: "ARK Slot Engineering Team"
---

# BUG-012: Win Amount from Win Failed Session Not Credited to Wallet

<!-- convention-summary-start -->
### Win Amount from Win Failed Session Not Credited to Wallet Summary

- **Core Architecture / Purpose**: Documents the end-to-end root cause, backend reconciliation contract, client-side UI wallet unfreeze mechanism, and testing procedure for QA defect `[v0.0.3][Wallet] Win amount from a Win Failed session is not updated to the wallet`.
- **Key Mechanisms & Design**: Reconciles the gap between Backend Mock Wallet fault injection (HTTP 500 on WIN action), Client `WalletLabel.isPaused` state locking, and subsequent session balance synchronization.
- **Domain Capabilities**: bugfix, 01_bugs_and_gotchas, wallet_resilience
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/Wallet/WalletModule.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/WalletLabel9666.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts`
- **Related Docs**: [`deep-dive.md`](../../docs-internal/19_source-repos-analysis/10-testcase-conventions/deep-dive.md), [`ITEM_056_wallet_balance_deduction_visual_timing.md`](../03_business_discrepancies/items/ITEM_056_wallet_balance_deduction_visual_timing.md)
<!-- convention-summary-end -->

---

## 1. 📌 Problem / Feature Overview

- **QA Defect Report**: `[v0.0.3][Wallet] Win amount from a Win Failed session is not updated to the wallet`.
- **Scenario Simulation Tool**: Dev/QA Scenario Wallet Tool (`Tool / Scenario Wallet`):
  - **Rule**: `Game: Red Cliff (kts_9666)`, `Actions: WIN`, `Code: 500`, `Sub Code: 0`, `Delay: 2000ms`, `Description: Winfail`.
- **Reproduction Steps**:
  1. Set up a `Winfail (Code 500)` scenario for target test user in the Scenario Wallet portal.
  2. Launch game `Red Cliff (9666)` and spin.
  3. Spin produces a winning matrix (`wat > 0`, `cna > 0`), triggering the Backend `WIN` transaction request.
  4. Backend Wallet Service rejects the credit request with HTTP 500 (Internal Server Error).
  5. User spins subsequent round (e.g. triggering Big Win x10 Total with Combine).
  6. Observe final wallet balance upon round completion.
- **Actual Result**:
  - The win amount ($Win_1$) from the failed session is permanently omitted from the player's wallet balance.
  - Final wallet balance reflects only:
    $$\text{Actual Balance} = B_0 - \text{Bet}_1 - \text{Bet}_2 + \text{Win}_2$$
- **Expected Result**:
  - All win amounts from both the failed session and subsequent sessions must be accurately credited and reconciled into the player's wallet:
    $$\text{Expected Balance} = B_0 - \text{Bet}_1 + \mathbf{Win_1} - \text{Bet}_2 + \text{Win}_2$$

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy

| Aspect | Vendor SDK (`cc-common`) Default Behavior | ARK Business Specification / GLI-19 Standard |
| :--- | :--- | :--- |
| **Failed `WIN` Transaction Recovery** | Client ignores backend transaction rejection; relies purely on passive server pushes (`wallets.NORMAL`). | Backend **MUST** maintain a `Pending Transactions` queue; automatic retry or reconcile on subsequent spin before accepting new bets. |
| **UI Wallet State on Failure** | If `ShowResultFinal` is interrupted, `WalletLabel.isPaused` remains `true` indefinitely. | Client must force-unpause (`_resumeWallet(true)`) or trigger modal error on unrecoverable transaction failures. |
| **Gameplay Flow on HTTP 500** | Game flow allows user to continue spinning new rounds even when previous win credit failed. | System must either gracefully reconcile pending win in the background OR halt spin initiation until balance integrity is confirmed. |
| **Balance Integrity Guarantee** | Balance strictly mirrors latest database snapshot without local integrity cross-check. | Reconciled balance must guarantee that completed winning rounds are never forfeited. |

---

## 3. 🔍 Root Cause Analysis

### A. Primary Cause: Backend Wallet Service Transaction Failure & Missing Reconciliation
1. In iGaming architecture, the client frontend **never mutates authoritative wallet balances locally**.
2. When the Scenario Wallet mock rule triggers `Code: 500` on action `WIN`:
   - Game Server's credit call to the Wallet Service fails.
   - The win payout ($Win_1$) is **never written into the player's database balance**.
3. When subsequent spins occur:
   - Game Server reads current player balance from database (which lacks $Win_1$).
   - Calculates: $\text{New Balance} = \text{DB Balance} - \text{Bet}_2 + \text{Win}_2$.
   - Sends this balance to Client via Socket/HTTP payload.
   - **Result**: Without a background transaction reconciliation / retry job on the Game Server, $Win_1$ is permanently lost.

### B. Secondary Cause: Client-Side Wallet Freezing Trap (`isPaused`)
In `assets/cc-common/cc-slot-module/GUI/Wallet/WalletLabel.ts`:
```typescript
onUpdateValue(value: number): void {
    if (!this.gameSettings.isJoinGameSuccess) return;
    this.lastValue = value;
    if (this.isPaused) {
        return; // ❌ When paused, balance visual updates are completely suppressed
    }
    this.moneyTween.runWallet(this.node, 0.3, value, { acceptRunDown: true });
}
```
1. At spin start, `makeScriptNormalSpinTrigger` invokes `_pauseWallet()` (`isPaused = true`).
2. When a session terminates abnormally (network drop, uncaught 500 error aborting the script pipeline), `makeScriptShowResultFinal` never executes `_resumeWallet()`.
3. Consequently, `WalletLabel.isPaused` remains stuck at `true`, preventing subsequent balance pushes from animating onto the HUD until a clean `ShowResultFinal` or game mode transition occurs.

---

## 4. 🛠️ Implementation & Resolution Architecture

### 1. Backend Settle / Reconciliation Contract (Definitive Fix)
The Game Server / Wallet Service integration must implement pending transaction reconciliation:
```text
[Spin 2 Request] 
       │
       ▼
[Check Pending Transactions for Player]
       │
       ├── Has Pending WIN from Session 1? ──► [Auto-Credit Pending Win1]
       │                                              │
       ▼                                              ▼
[Execute Bet 2 & Spin Evaluation] ─────────────► [Update Authoritative Balance]
                                                      │
                                                      ▼
                                            [Return Payload with Reconciled Balance]
```

### 2. Client-Side Defensive Handling (`WalletLabel9666.ts`)
To prevent `isPaused` from becoming permanently stuck on interrupted/failed sessions, enhance `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/WalletLabel9666.ts`:

```typescript
import { WalletLabel } from "../../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class WalletLabel9666 extends WalletLabel {
    onLoadExtend(): void {
        super.onLoadExtend();
        if (this.label) {
            this.updateDefaultWallet();
        }
    }

    override onUpdateValue(value: number): void {
        super.onUpdateValue(value);
    }

    override pauseWallet(): void {
        super.pauseWallet();
    }

    override resumeWallet(): void {
        super.resumeWallet();
    }

    /**
     * Force-recovers wallet label if stuck in paused state upon error / reconnect
     */
    public forceUnpauseAndSync(value?: number): void {
        this.isPaused = false;
        const targetValue = (typeof value === 'number') ? value : this.lastValue;
        this.onUpdateValue(targetValue);
    }
}
```

### 3. Emergency Stop & Director Error Unfreeze
In `assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts`, ensure `_syncAndResumeWallet()` is systematically invoked on game mode entry, reconnect, and popup dismissal:
```typescript
private _syncAndResumeWallet(): void {
    const gameLogic: any = (this as any).gameLogic;
    if (gameLogic && typeof gameLogic.updateCurrentWallet === 'function') {
        gameLogic.updateCurrentWallet();
    }
    this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
    this.eventManager.emit('RESUME_WALLET');
}
```

---

## 5. ⚠️ Gotchas & Edge Cases

1. **Scenario Wallet Delay Time**:
   - When configuring `Delay Time: 2,000ms`, the HTTP 500 response arrives mid-celebration or during reel refill. Handlers must not assume errors arrive synchronously before spin animations begin.
2. **`isFinished` Gate in Director**:
   - `GameModeDirectorModule._resumeWallet(force)` guards with `if (this.dataStore.playSession.isFinished || force)`. If a session fails mid-flight, `isFinished` may be `false`. Handlers recovering from errors must pass `force = true`.
3. **Dual Currency Separation**:
   - Ensure trial wallet (`wallets.TRIAL`) is not inadvertently affected by real wallet error recovery routines (`this.gameSettings.isTrialMode` check).

---

## 6. 📋 Verification & Testing Checklist

- [ ] **Step 1: Baseline Verification**: Confirm starting balance $B_0$.
- [ ] **Step 2: Inject Scenario**: Set Scenario Wallet to `Action: WIN`, `Code: 500`, `User: <target>`.
- [ ] **Step 3: Trigger Failed Win**: Spin until a winning round lands ($Win_1$). Confirm server logs show HTTP 500 on WIN credit.
- [ ] **Step 4: Remove Mock Rule**: Deactivate the 500 error scenario rule on the QA tool.
- [ ] **Step 5: Subsequent Spin**: Trigger a subsequent winning round ($Win_2$).
- [ ] **Step 6: Mathematical Balance Check**:
  $$\text{Final Balance} \stackrel{?}{=} B_0 - \text{Bet}_1 + Win_1 - \text{Bet}_2 + Win_2$$
- [ ] **Step 7: Reconnection Test**: Hard refresh browser (F5) to verify persisted balance on server matches client UI.

---

## 7. 🔗 References & Artifacts

- **QA Testcase Reference**: `docs-internal/19_source-repos-analysis/10-testcase-conventions/deep-dive.md` (§1.4: `Wallet_Failed_Testcase.xlsx`)
- **Error Handling Architecture**: `docs-internal/09_cross-cutting/B6_Error_Handling.md`
- **Wallet Timing Specification**: `transfer-ark/03_business_discrepancies/items/ITEM_056_wallet_balance_deduction_visual_timing.md`
- **Code Locations**:
  - `assets/cc-common/cc-slot-module/GUI/Wallet/WalletModule.ts`
  - `assets/cc-common/cc-slot-module/GUI/Wallet/WalletLabel.ts`
  - `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/WalletLabel9666.ts`
  - `assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts`
