---
id: "cc_slot_module:SettingPanel:methods:onShowBetHistory"
title: "SettingPanel.onShowBetHistory Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onShowBetHistory"]
---

# 📖 `SettingPanel.onShowBetHistory()`

<!-- convention-summary-start -->
### SettingPanel.onShowBetHistory Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onShowBetHistory Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowBetHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowBetHistory(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL);
}
```
