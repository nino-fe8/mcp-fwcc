---
id: "cc_slot_module:BaseGameDirector:gotcha:missing_writer_makeScript_crash"
title: "Gotcha: Missing makeScript Generator in Companion Writer"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "gotchas", "makeScript", "writer", "ScriptExecutor"]
---

# 🛑 Gotcha: Missing `makeScript` Generator in Companion Writer

<!-- convention-summary-start -->
### Gotcha: Missing makeScript Generator in Companion Writer Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing makeScript Generator in Companion Writer.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symptom & Defect
Calling `await this.runAction("BonusMiniGame", data)` fails immediately with console error:
```text
[GameView][NormalGameDirector] makeScriptBonusMiniGame is not a valid action
```
The game loop stops dead and spin buttons remain frozen.

---

## 2. Root Cause & Technical Defect
When `runAction(actionName)` is called, `ScriptExecutor` dynamically looks up `this.writer["makeScript" + actionName]`. If the Writer class is missing that exact method name, execution aborts.

---

## 3. Standard Code Solution & Fix
Always define the corresponding `makeScript[ActionName]` method on the companion Writer:

```typescript
// On NormalGameWriterModule:
makeScriptBonusMiniGame(data: any): script[] {
    return [
        { command: "OPEN_BONUS_MINI_GAME", data },
        { command: "PLAY_BONUS_ROUND", data },
        { command: "CLOSE_BONUS_MINI_GAME", data }
    ];
}
```
