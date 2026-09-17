---
id: "cc_slot_module:SettingPanel:methods:onSfxToggle"
title: "SettingPanel.onSfxToggle Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onSfxToggle"]
---

# 📖 `SettingPanel.onSfxToggle()`

<!-- convention-summary-start -->
### SettingPanel.onSfxToggle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onSfxToggle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onSfxToggle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSfxToggle(): void {
	if (this.soundPlayer && this.initialized) {
		this.gameLogic.emit(GameLogicUIEvents.TOGGLE_SFX);
		this.soundPlayer.playSFXClick();
	}
}
```
