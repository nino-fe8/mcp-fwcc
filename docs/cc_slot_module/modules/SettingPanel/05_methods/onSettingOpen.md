---
id: "cc_slot_module:SettingPanel:methods:onSettingOpen"
title: "SettingPanel.onSettingOpen Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onSettingOpen"]
---

# 📖 `SettingPanel.onSettingOpen()`

<!-- convention-summary-start -->
### SettingPanel.onSettingOpen Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel.onSettingOpen Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onSettingOpen(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSettingOpen(isActive: boolean): void {
	this.togglePopup(isActive);
}
```
