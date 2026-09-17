---
id: "cc_slot_module:JackpotModule:inheritance:override_points_matrix"
title: "JackpotModule Override Points Matrix"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 JackpotModule Override Points Matrix

<!-- convention-summary-start -->
### JackpotModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend` | `public` | Mandatory | Event registration and observer setup. |
| `setupObserver` | `public` | Recommended | Custom data field subscriptions. |
| `renderAllJackpot` | `public` | Recommended | Pool emission routing. |
| `showJackpot` | `public` | Optional | Visual transition on banner visibility. |
