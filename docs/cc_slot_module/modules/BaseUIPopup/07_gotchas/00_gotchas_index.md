---
id: "cc_slot_module:BaseUIPopup:gotchas:index"
title: "BaseUIPopup Gotchas Index"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BaseUIPopup Gotchas Index

<!-- convention-summary-start -->
### BaseUIPopup Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_popup_behavior_component.md`, `./02_rapid_toggle_state_desync.md`
- **Related Docs**: [`01_missing_popup_behavior_component`](./01_missing_popup_behavior_component.md), [`02_rapid_toggle_state_desync`](./02_rapid_toggle_state_desync.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_popup_behavior_component`](./01_missing_popup_behavior_component.md)** | Subclass Overriding onLoadExtend Without Super Call | HIGH | Forgetting `super.onLoadExtend()` prevents `popupBehavior` initialization, crashing `togglePopup()`. |
| **[`02_rapid_toggle_state_desync`](./02_rapid_toggle_state_desync.md)** | Mid-Animation Toggle Desynchronization | MEDIUM | Invoking `togglePopup` while an opening/closing animation is mid-tween can leave opacity desynchronized. |
