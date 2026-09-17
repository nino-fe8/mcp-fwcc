---
id: "cc_slot_module:GameModeDirectorModule:method:setupModules"
title: "GameModeDirectorModule.setupModules() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "setupModules", "GameModuleEvent", "moduleList"]
---

# `GameModeDirectorModule.setupModules(): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.setupModules() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.setupModules() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public setupModules(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Instantiates a private `this.moduleEvent = new GameModuleEvent()`.
2. Attaches logger styling: `this.moduleEvent.setLogger(this.logger, '[ModuleEvent]')`.
3. Iterates through each `cc.Node` in `this.moduleList`:
   - Gets `SlotBaseModule` component.
   - Invokes `module.setupModule(this.moduleEvent, this.gameMode)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setupModules(): void {
    this.moduleEvent = new GameModuleEvent();
    this.moduleEvent.setLogger(this.logger, '[ModuleEvent]');
    this.moduleList.forEach(module => {
        module.getComponent(SlotBaseModule).setupModule(this.moduleEvent, this.gameMode);
    });
}
```
