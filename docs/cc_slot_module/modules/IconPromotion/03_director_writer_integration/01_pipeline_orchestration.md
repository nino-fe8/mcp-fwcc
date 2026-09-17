---
id: "cc_slot_module:IconPromotion:director_writer:pipeline_orchestration"
title: "IconPromotion Pipeline Integration"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 IconPromotion Pipeline Integration

<!-- convention-summary-start -->
### IconPromotion Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IconPromotion Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Listens to `eno.PromotionData.isActive` and coordinates with `SlotPromotionSpinTimes`.
