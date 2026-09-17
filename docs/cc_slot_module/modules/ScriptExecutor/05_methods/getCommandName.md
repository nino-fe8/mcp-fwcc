---
id: "cc_slot_module:ScriptExecutor:method:getCommandName"
title: "ScriptExecutor.getCommandName() Method Specification"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "method", "getCommandName", "speed_routing", "turbo"]
---

# `ScriptExecutor.getCommandName(command: string): string`

<!-- convention-summary-start -->
### ScriptExecutor.getCommandName() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScriptExecutor.getCommandName() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getCommandName(command: string): string
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains active speed: `let gameSpeed = this.getGameSpeed()`.
2. Iterates downwards through speed levels (`while (gameSpeed > 0)`):
   * Constructs candidate method name: `const commandWithSpeed = command + "_" + gameSpeed`.
   * Checks if `this.director[commandWithSpeed]` exists as a function.
   * If found, returns the speed-specialized method name immediately.
3. Defaults to original base `command` if no speed-suffixed method is defined.

---

## 3. Un-truncated Source Code Implementation
```typescript
getCommandName(command: string): string {
    let gameSpeed = this.getGameSpeed();
    while (gameSpeed > 0) {
        const commandWithSpeed = command + "_" + gameSpeed;
        if (this.director[commandWithSpeed] && typeof this.director[commandWithSpeed] === "function") {
            return commandWithSpeed;
        }
        gameSpeed--;
    }
    return command;
}
```
