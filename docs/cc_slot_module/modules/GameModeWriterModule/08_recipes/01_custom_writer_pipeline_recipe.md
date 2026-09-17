---
id: "cc_slot_module:GameModeWriterModule:recipe:custom_writer_pipeline"
title: "Recipe: Adding a Custom VFX Step into the Reel Stop Sequence"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "recipe", "custom_step", "VFX"]
---

# 🍳 Recipe: Adding a Custom VFX Step into the Reel Stop Sequence

<!-- convention-summary-start -->
### Recipe: Adding a Custom VFX Step into the Reel Stop Sequence Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Adding a Custom VFX Step into the Reel Stop Sequence.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
You need to trigger an expanding wild animation (`_expandWildColumns`) immediately after the reels stop but before paylines calculate.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `GameModeWriterModule`
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_expandWildColumns", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

### Step 2: Implement Step Handler on Companion Director
```typescript
async _expandWildColumns(data: any): Promise<void> {
    await this.wildSpineManager.playExpansionAnimations();
}
```
