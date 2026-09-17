---
id: "cc_slot_module:FreeGameWriterModule:recipe:retrigger_animation_script"
title: "Recipe: Injecting Retrigger Celebration Cutscene Step"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "recipe", "retrigger"]
---

# 🍳 Recipe: Injecting Retrigger Celebration Cutscene Step

<!-- convention-summary-start -->
### Recipe: Injecting Retrigger Celebration Cutscene Step Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Injecting Retrigger Celebration Cutscene Step.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
When Scatters hit during Free Spins, award +5 additional spins and play a Retrigger popup before continuing.

---

## 2. Implementation

```typescript
@ccclass
export default class RetriggerFreeGameWriter extends FreeGameWriterModule {
    override makeScriptShowResultFinal(): Object[] {
        const { isRetrigger, retriggerSpins } = this.dataStore.playSession;
        if (isRetrigger) {
            let listScript = [];
            listScript.push({
                command: "_showCutscene",
                data: { cutsceneType: CUTSCENE_TYPE_ENUM.RETRIGGER, cutsceneData: { retriggerSpins } },
            });
            listScript.push(...this.getFreeGameRemainScript());
            return listScript;
        }
        return super.makeScriptShowResultFinal();
    }
}
```
