---
id: "cc_slot_module:MenuPanel:methods:onEnableBGM"
title: "MenuPanel.onEnableBGM Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onEnableBGM"]
---

# 📖 `MenuPanel.onEnableBGM()`

<!-- convention-summary-start -->
### MenuPanel.onEnableBGM Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.onEnableBGM Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onEnableBGM(isEnableBGM: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnableBGM(isEnableBGM: boolean): void {
	this.musicOn.active = isEnableBGM;
	this.musicOff.active = !isEnableBGM;
	if (this.soundPlayer) {
		this.soundPlayer.setBgmEnable(isEnableBGM);
	}
}
```
