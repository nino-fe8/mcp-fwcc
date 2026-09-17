---
id: "cc_slot_module:SlotPaylineSchedule:inheritance:subclassing_guide"
title: "SlotPaylineSchedule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotPaylineSchedule Subclassing & Customization Guide

<!-- convention-summary-start -->
### SlotPaylineSchedule Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `SlotPaylineSchedule` to customize spin presentation timing logic.
- Override `blinkAllPaylines()` to change Stage 1 delay behavior or trigger full-table sound effects.
- Override `showAllPaylines()` to adjust loop sequence timing curves.
