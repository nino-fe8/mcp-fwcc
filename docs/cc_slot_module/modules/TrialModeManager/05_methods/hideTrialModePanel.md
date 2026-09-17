---
id: "cc_slot_module:TrialModeManager:methods:hideTrialModePanel"
title: "TrialModeManager.hideTrialModePanel Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "hideTrialModePanel"]
---

# 📖 `TrialModeManager.hideTrialModePanel()`

<!-- convention-summary-start -->
### TrialModeManager.hideTrialModePanel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.hideTrialModePanel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Deactivates and zeroes opacity on `trialModePanel`.

```typescript
public hideTrialModePanel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideTrialModePanel(): void {
    if (this.trialModePanel) {
        this.trialModePanel.active = false;
        setOpacity(this.trialModePanel, 0);
    }
}
```
