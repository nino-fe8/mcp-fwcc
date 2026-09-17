---
id: "cc_slot_module:SettingPanel:methods:onLoadExtend"
title: "SettingPanel.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `SettingPanel.onLoadExtend()`

<!-- convention-summary-start -->
### SettingPanel.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.gameSettingData = this.gameLogic.getDataModel().GameSettingData;
	this.setupObserver();
	super.onLoadExtend();
}
```
