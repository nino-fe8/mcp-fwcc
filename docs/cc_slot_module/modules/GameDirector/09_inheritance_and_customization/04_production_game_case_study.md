---
id: "cc_slot_module:GameDirector:customization:production_game_case_study"
title: "Production Case Study: GameDirector Configuration in Red Cliff"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 📖 Production Case Study: GameDirector Configuration in Red Cliff

<!-- convention-summary-start -->
### Production Case Study: GameDirector Configuration in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: GameDirector Configuration in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Context & Scene Graph Configuration

In **Red Cliff (`g9666L`)**, `Canvas/Director` hosts `GameDirector`, which registers:
1. `NormalGame` (`type: NORMAL_GAME`)
2. `FreeGame` (`type: FREE_GAME`)

---

## 2. Production Flow Trace

```typescript
// GameDirector switches into Free Game when FreeGameDirectorModule triggers:
this.eventManager.on(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, (targetMode) => {
    // 1. Pushes FreeGame to stack
    // 2. NormalGame.active = false
    // 3. FreeGame.active = true
    // 4. FreeGameDirectorModule.enter()
});
```
