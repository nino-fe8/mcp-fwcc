---
id: "cc_slot_module:BetSelectionPanel:methods:setupObserver"
title: "BetSelectionPanel.setupObserver Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "setupObserver", "reactive", "observer"]
---

# 📖 `BetSelectionPanel.setupObserver()`

<!-- convention-summary-start -->
### BetSelectionPanel.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Retrieves `BetData` and `UIManagerData` model instances from `GameLogic` and registers reactive observer watchers for wallet credit, active bet lines, bet denominations, and panel toggle states.

```typescript
public setupObserver(): void
```

---

## 2. Trigger Source & Execution Context

- **Invoker**: Called by `onLoadExtend()`.
- **Purpose**: Establishes data synchronization channels to ensure UI reflects real-time bankroll and bet status.

---

## 3. Algorithmic Breakdown

1. **Model Acquisition**: Resolves `this.betModel = this.gameLogic.getDataModel().BetData` and `this.uiManagerData = this.gameLogic.getDataModel().UIManagerData`.
2. **Watch Total Credit**: Watches `betModel.totalCredit` to update player bankroll text via `updateTotalCreditLabel`.
3. **Watch Bet Lines**: Watches `betModel.betLineNumber` to handle games with variable payline counts via `onUpdateBetLineNumber`.
4. **Watch Bet Tiers**: Watches `betModel.mainBets` to rebuild item options if server updates available bet levels.
5. **Watch Open State**: Watches `uiManagerData.isBetSelectionPanelOpen` to execute `onBetSelectionPanelOpen`.

---

## 4. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.betModel = this.gameLogic.getDataModel().BetData;
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.observer.watch(this.betModel, 'totalCredit', this.updateTotalCreditLabel.bind(this), this);
	this.observer.watch(this.betModel, "betLineNumber", this.onUpdateBetLineNumber.bind(this), this);
	this.observer.watch(this.betModel, 'mainBets', this.updateMainBets.bind(this),this);
	this.observer.watch(this.uiManagerData, "isBetSelectionPanelOpen", this.onBetSelectionPanelOpen.bind(this), this);
}
```
