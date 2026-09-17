---
id: "cc_slot_module:NormalGameDirectorModule:recipe:scatter_cascade_collection"
title: "Recipe: Concurrent Scatter Collection During Cascade Drops"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "recipe", "scatter", "cascade"]
---

# 🍳 Recipe: Concurrent Scatter Collection During Cascade Drops

<!-- convention-summary-start -->
### Recipe: Concurrent Scatter Collection During Cascade Drops Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Concurrent Scatter Collection During Cascade Drops.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `NormalGameDirectorModule[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
You need to fly scatter particles to a meter at the exact millisecond winning symbols explode during cascade respins.

---

## 2. Step-by-Step Implementation

### Step 1: Override `_startRespinningTable`
In `NormalGameDirectorModule[GameId].ts`:
```typescript
override async _startRespinningTable(data: any): Promise<void> {
    await Promise.all([
        this.moduleEvent.emit("TABLE_START_RESPIN", data),
        this._collectScatter(),
    ]);
}
```

### Step 2: Implement `_collectScatter()`
```typescript
private async _collectScatter(): Promise<void> {
    const rawMatrix = this.dataStore.playSession.respinGameMatrix || this.dataStore.playSession.matrix || [];
    const scatterIndexes = rawMatrix.map((s, i) => s === 'A' ? i : -1).filter(i => i !== -1);
    if (scatterIndexes.length > 0) {
        await this.eventManager.emit("COLLECT_SCATTER", { count: scatterIndexes.length, scatterIndexes });
    }
}
```
