---
id: "cc_slot_module:UIManagerModule:methods:onSwitchMode"
title: "UIManagerModule.onSwitchMode Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "onSwitchMode"]
---

# 📖 `UIManagerModule.onSwitchMode()`

<!-- convention-summary-start -->
### UIManagerModule.onSwitchMode Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.onSwitchMode Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes trial mode status flags across local cache, `GameDataStore`, and `SlotGameSettings` while resetting primary round data.

```typescript
public onSwitchMode(isTrialModeActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSwitchMode(isTrialModeActive: boolean): void {
    this.isTrialMode = isTrialModeActive;
    this.dataStore.resetDataPS();
    this.dataStore.isTrialMode = isTrialModeActive;
    this.gameSettings.isTrialMode = isTrialModeActive;
}
```
