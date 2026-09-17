---
id: "cc_slot_mechanics:MultiplierModule:pipeline:pipeline_orchestration"
title: "MultiplierModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ MultiplierModule Pipeline Orchestration & Writer Commands

<!-- convention-summary-start -->
### MultiplierModule Pipeline Orchestration & Writer Commands Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultiplierModule Pipeline Orchestration & Writer Commands.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteMultiplierModule(data: any) {
    return [
        {
            command: "_scriptMultiplierModuleAction",
            data: data
        }
    ];
}
```
