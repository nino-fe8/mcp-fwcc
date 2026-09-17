---
id: "cc_slot_module:MenuPanel:methods:onEnableSFX"
title: "MenuPanel.onEnableSFX Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onEnableSFX"]
---

# 📖 `MenuPanel.onEnableSFX()`

<!-- convention-summary-start -->
### MenuPanel.onEnableSFX Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.onEnableSFX Method.
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
	this.sfxOn.active = isEnableSFX;
	this.sfxOff.active = !isEnableSFX;
	if (this.soundPlayer) {
		this.soundPlayer.setEffectEnable(isEnableSFX);
	}
}
```
