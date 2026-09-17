---
id: "cc_slot_module:NormalGameWriterModule:recipe:megaways_ways_counter_pipeline"
title: "Recipe: Megaways Ways Counter Pipeline Integration"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "recipe", "megaways", "pipeline"]
---

# 🍳 Recipe: Megaways Ways Counter Pipeline Integration

<!-- convention-summary-start -->
### Recipe: Megaways Ways Counter Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Megaways Ways Counter Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
You need to calculate and animate total Megaways combinations on the top banner as each reel comes to a stop.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `NormalGameWriterModule`
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_calculateMegawaysWays", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

### Step 2: Implement Handler on Companion Director
```typescript
async _calculateMegawaysWays(data: any): Promise<void> {
    await this.megawaysHUD.updateWaysCount(data.formatMatrix);
}
```
