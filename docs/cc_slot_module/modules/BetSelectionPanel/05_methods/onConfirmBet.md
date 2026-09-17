---
id: "cc_slot_module:BetSelectionPanel:methods:onConfirmBet"
title: "BetSelectionPanel.onConfirmBet Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onConfirmBet", "event_emission", "bet_update"]
---

# 📖 `BetSelectionPanel.onConfirmBet()`

<!-- convention-summary-start -->
### BetSelectionPanel.onConfirmBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel.onConfirmBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Validates the selected bet level, emits `GameLogicUIEvents.UPDATE_BET_ID` with the composite bet ID string if the wager has changed, and closes the modal.

```typescript
public onConfirmBet(): void
```

---

## 2. Trigger Source & Execution Context

- **Trigger**: Player taps the "Confirm" / "OK" button at the bottom of the panel.

---

## 3. Algorithmic Breakdown

1. **Audio Feedback**: Plays button click SFX via `this.soundPlayer.playSFXClick()`.
2. **Change Detection**: Compares `this.currentBetId != this.betModel.betKey`.
3. **Event Dispatch**: If modified, dispatches:
   ```typescript
   this.gameLogic.emit(GameLogicUIEvents.UPDATE_BET_ID, this.getBetId());
   ```
4. **Modal Teardown**: Calls `this.closePanel()` to trigger dismiss animations.

---

## 4. Complete Source Code Implementation

```typescript
onConfirmBet(): void {
	this.soundPlayer.playSFXClick();
	if (this.currentBetId != this.betModel.betKey) {
		this.gameLogic.emit(GameLogicUIEvents.UPDATE_BET_ID, this.getBetId());
	}
	this.closePanel();
}
```
