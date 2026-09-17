---
id: "cc_slot_module:SettingPanel:methods:onEnableSFX"
title: "SettingPanel.onEnableSFX Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onEnableSFX"]
---

# 📖 `SettingPanel.onEnableSFX()`

<!-- convention-summary-start -->
### SettingPanel.onEnableSFX Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onEnableSFX Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onEnableSFX(isEnableSFX: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnableSFX(isEnableSFX: boolean): void {
	this.sfxToggle.isChecked = isEnableSFX;

	if (this.soundPlayer) {
		this.soundPlayer.setEffectEnable(isEnableSFX);
	}
}
```
