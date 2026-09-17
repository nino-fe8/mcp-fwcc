---
id: "cc_slot_mechanics:StackedReelModule:pipeline:pipeline_orchestration"
title: "StackedReelModule Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ StackedReelModule Pipeline Orchestration & Writer Commands

<!-- convention-summary-start -->
### StackedReelModule Pipeline Orchestration & Writer Commands Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StackedReelModule Pipeline Orchestration & Writer Commands.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteStackedReelModule(data: any) {
    return [
        {
            command: "_scriptStackedReelModuleAction",
            data: data
        }
    ];
}
```
