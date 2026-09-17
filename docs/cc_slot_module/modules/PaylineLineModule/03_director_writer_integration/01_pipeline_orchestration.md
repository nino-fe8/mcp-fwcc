---
id: "cc_slot_module:PaylineLineModule:director_writer:pipeline_orchestration"
title: "PaylineLineModule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PaylineLineModule 3-Tier Pipeline Orchestration

<!-- convention-summary-start -->
### PaylineLineModule 3-Tier Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule 3-Tier Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 3-Tier Hierarchy Interaction

```text
GameModeDirectorModule / Writer
       │
       ▼ (moduleEvent: SETUP_PAYLINES)
SlotTablePaylineModule
       │
       ▼ (payLineEmitter: PAYLINE_SET_DATA, PAYLINE_BLINK_ALL, PAYLINE_SHOW_LINE)
PaylineLineModule
       │
       ▼ (emit: "INIT", "SHOW", "HIDE", "RESET")
Line Instance Prefab / cc.Graphics Component
```

1. **Director Layer**: Dispatches `SETUP_PAYLINES` command into the `ScriptExecutor` queue.
2. **Module Orchestrator (`SlotTablePaylineModule`)**: Translates director steps and signals its internal `payLineEmitter`.
3. **Line Module (`PaylineLineModule`)**: Spawns and toggles visual line entities.
