---
id: "cc_slot_module:GameEventManager:customization:game_creation_workflow"
title: "Game Creation Workflow: Adding Custom Game Events"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "customization", "workflow", "custom_events", "checklist"]
---

# 🚀 Game Creation Workflow: Adding Custom Game Events

<!-- convention-summary-start -->
### Game Creation Workflow: Adding Custom Game Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Adding Custom Game Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `scripts/Enum/GameUIEvents[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when introducing new game mechanics requiring cross-module coordination:

---

## Step 1: Declare Custom Event Constant
Create `scripts/Enum/GameUIEvents[GameId].ts`:
```typescript
export const GameUIEvents9666 = {
    MULTIPLIER: {
        RESET_MULTIPLIER: "RESET_MULTIPLIER",
        UPDATE_MULTIPLIER: "UPDATE_MULTIPLIER",
    },
    SPECIAL_FEATURE: {
        TRIGGER_EXPANDING_WILD: "TRIGGER_EXPANDING_WILD",
    }
};
```

---

## Step 2: Register Subscriber in `registerEvents()`
Inside your custom UI / VFX module:
```typescript
protected registerEvents(): void {
    super.registerEvents();
    this.eventManager.on(GameUIEvents9666.MULTIPLIER.RESET_MULTIPLIER, this.onResetMultiplier, this);
}
```

---

## Step 3: Emit Asynchronously from Director
Inside your custom Director or Writer:
```typescript
async resetMultiplierStep(): Promise<void> {
    await this.eventManager.emit(GameUIEvents9666.MULTIPLIER.RESET_MULTIPLIER, false);
}
```

---

## Step 4: Add Mandatory Cleanup in `onDestroy()`
```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
    super.onDestroy();
}
```
