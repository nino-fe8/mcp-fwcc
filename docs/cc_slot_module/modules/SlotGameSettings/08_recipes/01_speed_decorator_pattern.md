---
id: "cc_slot_module:SlotGameSettings:recipe:speed_decorator_pattern"
title: "Recipe: FastToResult Method Decorator Pattern"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "recipes", "speed_decorators", "FTR", "production_code"]
---

# 💡 Recipe: FastToResult Method Decorator Pattern

<!-- convention-summary-start -->
### Recipe: FastToResult Method Decorator Pattern Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: FastToResult Method Decorator Pattern.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Concrete Production Implementation (Red Cliff `g9666L`)

To avoid repeating `if (this.gameSettings.isFastToResult)` boilerplate across multiple animation methods, use a TypeScript method decorator that automatically resolves `SlotGameSettings` and bypasses delays:

```typescript
import { SlotGameSettings } from "../Core/SlotGameSettings";

function resolveGameSettings(target: any): SlotGameSettings | null {
    if (target.gameSettings instanceof SlotGameSettings) {
        return target.gameSettings;
    }
    if (target.dataStore && target.dataStore.gameSettings instanceof SlotGameSettings) {
        return target.dataStore.gameSettings;
    }
    return null;
}

/**
 * Decorator that automatically executes the fallback instantaneous logic when in FTR mode.
 */
export function FastToResult(fallbackFn?: Function) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const settings = resolveGameSettings(this);
            if (settings && settings.isFastToResult) {
                if (fallbackFn) {
                    return fallbackFn.apply(this, args);
                }
                return; // Skip long animation completely
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}
```
