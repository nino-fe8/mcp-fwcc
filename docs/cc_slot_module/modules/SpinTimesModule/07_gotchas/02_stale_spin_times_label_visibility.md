---
id: "cc_slot_module:SpinTimesModule:gotchas:stale_spin_times_label_visibility"
title: "Gotcha: Lingering Free Spin Counter on Mode Exit"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "gotchas", "mode_exit"]
---

# ⚠️ Gotcha: Lingering Free Spin Counter on Mode Exit

<!-- convention-summary-start -->
### Gotcha: Lingering Free Spin Counter on Mode Exit Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Lingering Free Spin Counter on Mode Exit.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When transitioning from Free Spins back to Normal Game, if `UIManagerModule.hideAllUI()` does not deactivate `freeSpinTimes`, a leftover badge displaying `0` remains anchored over the spin button.

---

## 2. Prevention

`UIManagerModule.hideSpinControls()` explicitly deactivates both `normalSpinTimes` and `freeSpinTimes` before mounting the new mode layout.
