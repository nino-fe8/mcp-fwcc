---
id: "cc_slot_module:BonusGameWriterModule:method:makeScriptShowResultFinal"
title: "BonusGameWriterModule.makeScriptShowResultFinal() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "method", "makeScriptShowResultFinal"]
---

# `BonusGameWriterModule.makeScriptShowResultFinal(): any[]`

<!-- convention-summary-start -->
### BonusGameWriterModule.makeScriptShowResultFinal() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriterModule.makeScriptShowResultFinal() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public makeScriptShowResultFinal(): any[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles 5-step terminal pipeline:
   * `_stopCountDown`: Cancels repeating timer.
   * `_openFinalItem`: Opens the final picked chest.
   * `_openAllItems`: Uncovers unselected chests.
   * `_playFinalResultEffect`: Plays `TOTAL_WIN` or `JACKPOT_WIN` cutscene.
   * `_clearCurrentBonusGameData`: Resets picked chest indices.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptShowResultFinal(): any[] {
    const listScript = [];
    listScript.push({
        command: "_stopCountDown",
    });
    listScript.push({
        command: "_openFinalItem",
    });
    listScript.push({
        command: "_openAllItems",
    });
    listScript.push({
        command: "_playFinalResultEffect",
    });
    listScript.push({
        command: "_clearCurrentBonusGameData",
    });

    return listScript;
}
```
