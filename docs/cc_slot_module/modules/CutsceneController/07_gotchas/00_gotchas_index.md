---
id: "cc_slot_module:CutsceneController:gotchas:index"
title: "CutsceneController Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ CutsceneController Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### CutsceneController Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_unregistered_cutscene_silent_drop.md`
- **Related Docs**: [`01_unregistered_cutscene_silent_drop`](./01_unregistered_cutscene_silent_drop.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unregistered_cutscene_silent_drop`](./01_unregistered_cutscene_silent_drop.md)** | Unregistered `cutsceneType` Silently Resolves Without Display | MEDIUM | If `playCutScene()` receives an unregistered `cutsceneType`, it resolves immediately without warning, skipping the cutscene. |
