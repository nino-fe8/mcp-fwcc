---
id: "cc_slot_module:SettingPanel:methods:init"
title: "SettingPanel.init Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "init"]
---

# 📖 `SettingPanel.init()`

<!-- convention-summary-start -->
### SettingPanel.init Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.init Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
	// Its some weird sound with Toggle sound when init, so this.initialized is the work around
	this.bgmToggle.isChecked = this.gameSettingData.isEnableBGM;
	this.sfxToggle.isChecked = this.gameSettingData.isEnableSFX;

	this.initialized = true;
}
```
