---
id: "cc_slot_module:WinEffectModule:director_writer:pipeline_orchestration"
title: "WinEffectModule Pipeline Orchestration & Writer Integration"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 WinEffectModule Pipeline Orchestration & Writer Integration

<!-- convention-summary-start -->
### WinEffectModule Pipeline Orchestration & Writer Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Pipeline Orchestration & Writer Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Writer Command Injection

Mode writers insert win celebration steps:
```typescript
// In NormalGameWriterModule.ts:
if (isBigWin) {
    script.push({
        command: "SHOW_WIN_EFFECT",
        data: {
            winAmount: roundResult.winAmount,
            totalBet: roundResult.totalBet,
            winType: "BIG"
        }
    });
}
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.WIN_EFFECT`.
