---
id: "cc_slot_module:SettingPanel:methods:onExit"
title: "SettingPanel.onExit Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onExit"]
---

# 📖 `SettingPanel.onExit()`

<!-- convention-summary-start -->
### SettingPanel.onExit Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onExit Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onExit(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onExit(): void {
	if (this.popupBehavior && this.popupBehavior.isPlaying()) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_SETTINGS_PANEL);
}
```
