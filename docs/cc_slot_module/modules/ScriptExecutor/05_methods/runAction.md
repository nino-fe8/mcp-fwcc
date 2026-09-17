---
id: "cc_slot_module:ScriptExecutor:method:runAction"
title: "ScriptExecutor.runAction() Method Specification"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "method", "runAction", "Promise", "writer"]
---

# `ScriptExecutor.runAction(actionName: string, data?: any): Promise<void>`

<!-- convention-summary-start -->
### ScriptExecutor.runAction() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScriptExecutor.runAction() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public runAction(actionName: string, data?: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if `this.writer["makeScript" + actionName]` is a function. If missing, logs error and aborts.
2. Invokes writer generator: `const listScripts = this.writer["makeScript" + actionName](data)`.
3. Stores scripts in `this.scripts[actionName] = { actions: listScripts, onSkip: reject, onFinish: resolve }`.
4. Initiates execution: `this.executeNextScript(actionName)`.
5. Returns `Promise<void>` that resolves on finish or rejects on abort.

---

## 3. Un-truncated Source Code Implementation
```typescript
runAction(actionName: string, data?: any): Promise<void> {
    //@ts-ignore
    if (CC_DEBUG) {
        console.group(`Run Action: ${actionName}`);
    }
    
    return new Promise<void>((resolve, reject) => {
        if (!this.writer || typeof this.writer["makeScript" + actionName] !== "function") {
            error(`[GameView][${this.name}] makeScript${actionName} is not a valid action`);
            return;
        }

        const listScripts = this.writer["makeScript" + actionName](data);
        if (listScripts.length > 0) {
            // const listScriptMapping = listScripts.map(script => script.command);
            // this.logger && this.logger.log(`[${this.name}]`, '[Action]', `${actionName}`, `- Scripts: ${JSON.stringify(listScriptMapping)}`);
        } else {
            //@ts-ignore
            if (CC_DEBUG) {
                console.groupEnd();
            }
        }

        this.scripts[actionName] = [];
        this.scripts[actionName].actions = listScripts;
        this.scripts[actionName].onSkip = () => {
            this.scripts[actionName].onSkip = null;
            reject(new Error(BACK_TO_REAL_MODE_ERROR));
        };
        this.scripts[actionName].onFinish = () => {
            this.scripts[actionName].onSkip = null;
            resolve();
        };

        this.executeNextScript(actionName);
    }).catch((err) => {
        if (err && err.message == BACK_TO_REAL_MODE_ERROR) {
            warn(BACK_TO_REAL_MODE_ERROR);
        } else {
            //@ts-ignore
            if (CC_DEBUG) {
                console.groupEnd();
            }
            error(err);
        }
    });
}
```
