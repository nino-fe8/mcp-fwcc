---
id: "cc_slot_module:BetHistoryDetailModule:overview:scene_and_prefabs"
title: "BetHistoryDetailModule Scene & Prefabs"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "overview", "prefabs"]
---

# 📦 BetHistoryDetailModule Scene & Prefabs

<!-- convention-summary-start -->
### BetHistoryDetailModule Scene & Prefabs Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Scene & Prefabs.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `BetHistoryDetail.prefab`, `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/BetHistoryDetail.prefab`, `ScrollModeItem.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Scene Node Anchor

- **Scene Anchor**: `Canvas/Director/Popup/BetHistory/DetailView`
- **Parent View**: `BetHistoryModule` (`detailView` property)

---

## 2. Referenced Prefabs & Asset Manifest

| Asset Name | Asset Relative Path | Purpose |
| :--- | :--- | :--- |
| `BetHistoryDetail.prefab` | `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/BetHistoryDetail.prefab` | Root detail view layout with ScrollView and content containers. |
| `ScrollModeItem.prefab` | `assets/cc-common/cc-slot-module/Popup/BetHistory/prefabs/ScrollModeItem.prefab` | Dynamic step tab item showing mode icon/index. |
