---
id: "cc_slot_module:ExtraBetModule:events:scoped_module_events"
title: "ExtraBetModule Scoped Events"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 ExtraBetModule Scoped Events

<!-- convention-summary-start -->
### ExtraBetModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scoped Events

`ExtraBetModule` does not emit private scoped events; it directly updates `extraBetLabel.string`.
