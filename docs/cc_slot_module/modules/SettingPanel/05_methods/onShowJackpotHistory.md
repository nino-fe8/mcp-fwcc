---
id: "cc_slot_module:SettingPanel:methods:onShowJackpotHistory"
title: "SettingPanel.onShowJackpotHistory Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onShowJackpotHistory"]
---

# 📖 `SettingPanel.onShowJackpotHistory()`

<!-- convention-summary-start -->
### SettingPanel.onShowJackpotHistory Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onShowJackpotHistory Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowJackpotHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowJackpotHistory(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.OPEN_JACKPOT_HISTORY_PANEL);
}
```
