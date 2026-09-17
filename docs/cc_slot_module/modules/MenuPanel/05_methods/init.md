---
id: "cc_slot_module:MenuPanel:methods:init"
title: "MenuPanel.init Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "init"]
---

# 📖 `MenuPanel.init()`

<!-- convention-summary-start -->
### MenuPanel.init Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.init Method.
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
	this.musicOn.active = this.gameSettingData.isEnableBGM;
	this.musicOff.active = !this.gameSettingData.isEnableBGM;
	this.sfxOn.active = this.gameSettingData.isEnableSFX;
	this.sfxOff.active = !this.gameSettingData.isEnableSFX;
	this.initialized = true;
}
```
