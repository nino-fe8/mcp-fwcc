---
id: "cc_slot_module:SettingPanel:methods:onBgmToggle"
title: "SettingPanel.onBgmToggle Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onBgmToggle"]
---

# 📖 `SettingPanel.onBgmToggle()`

<!-- convention-summary-start -->
### SettingPanel.onBgmToggle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onBgmToggle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onBgmToggle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onBgmToggle(): void {
	if (this.soundPlayer && this.initialized) {
		this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
		this.soundPlayer.playSFXClick();
	}
}
```
