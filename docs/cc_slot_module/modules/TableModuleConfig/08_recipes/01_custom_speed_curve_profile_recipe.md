---
id: "cc_slot_module:TableModuleConfig:recipe:custom_speed_curve_profile"
title: "Recipe: Crafting Snappy Lightning Spin Speed Presets"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "recipe", "speed_tuning", "lightning_spin"]
---

# 🍳 Recipe: Crafting Snappy Lightning Spin Speed Presets

<!-- convention-summary-start -->
### Recipe: Crafting Snappy Lightning Spin Speed Presets Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Crafting Snappy Lightning Spin Speed Presets.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `TableModuleConfig9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
Add an ultra-fast "Lightning Spin" mode ($< 0.4\text{s}$ per spin) alongside Normal and Turbo.

---

## 2. Configuration Code

In `TableModuleConfig9666.ts`:
```typescript
@ccclass
export class TableModuleConfig9666 extends TableModuleConfig {
    onLoad(): void {
        this.MODES.LIGHTNING = {
            speed: 0.03,
            easingStop: 5,
            easingTimeStop: 0.08,
            delayStop: 0,
            isTurbo: true,
            stepStop: 3,
            slowdownFactor: 12,
        };
    }
}
```
