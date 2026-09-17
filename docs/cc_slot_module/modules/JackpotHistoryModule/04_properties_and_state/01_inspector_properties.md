---
id: "cc_slot_module:JackpotHistoryModule:properties:inspector_properties"
title: "JackpotHistoryModule Inspector Properties"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ JackpotHistoryModule Inspector Properties

<!-- convention-summary-start -->
### JackpotHistoryModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Serialized Properties

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `itemPerPage` | `number` | `10` | Number of winner entries requested per page. |
| `jpList` | `string` | `"GRAND-MAJOR"`| Comma/hyphen delimited list of jackpot tiers to query. |
| `recordView` | `cc.Node` | `null` | Winner row list parent container. |
| `nextBtn` | `cc.Button` | `null` | Next page button. |
| `backBtn` | `cc.Button` | `null` | Previous page button. |
| `backClose` | `cc.Button` | `null` | Close modal button. |
| `loading` | `cc.Node` | `null` | Network spinner overlay. |
| `messageNode` | `cc.Node` | `null` | Empty state / error container. |
| `messageLabel`| `cc.Label` | `null` | Empty state text message. |
| `pageIndexNode`| `cc.Node` | `null` | Current page badge container. |
| `pageIndexLabel`| `cc.Label` | `null` | Current page number label. |
| `textPage` | `cc.Label` | `null` | Localized "Page" string. |
