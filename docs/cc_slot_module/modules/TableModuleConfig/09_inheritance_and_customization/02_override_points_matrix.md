---
id: "cc_slot_module:TableModuleConfig:customization:override_points_matrix"
title: "TableModuleConfig Extension Points Matrix"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 TableModuleConfig Extension Points Matrix

<!-- convention-summary-start -->
### TableModuleConfig Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Property / Method | Default | Safe to Override? | Customization Purpose |
| :--- | :--- | :--- | :--- |
| **`TABLE_FORMAT`** | `[3, 3, 3, 3, 3]` | `YES` | Define irregular 3-4-5-4-3 or 6-reel formats. |
| **`MODES`** | Normal & Turbo | `YES` | Add Lightning mode or adjust deceleration bounce strength. |
| **`getRandomMatrix()`**| Random loop | `YES` | Inject game-specific weighted random symbol matrix. |
| **`getRandomBeautyMatrix()`** | Random pick | `YES` | Provide custom game-opening showcase matrices. |
