---
id: "cc_slot_module:GameConfig:recipe:multi_currency_configuration"
title: "Recipe: Custom Multi-Currency & Cent Suffix Configuration"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "recipes", "currency", "multi_currency", "cent_suffix", "CURRENCY_CONFIG"]
---

# 💡 Recipe: Custom Multi-Currency & Cent Suffix Configuration

<!-- convention-summary-start -->
### Recipe: Custom Multi-Currency & Cent Suffix Configuration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom Multi-Currency & Cent Suffix Configuration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Concrete Currency Setup Example

```typescript
@ccclass("CustomMarketGameConfig")
export default class CustomMarketGameConfig extends GameConfig {
    public CURRENCY_CONFIG: any = {
        // Vietnamese Dong (No decimals, no cent unit)
        VND: {
            MONEY_FORMAT:  { DECIMAL_COUNT: 0, CURRENCY_PREFIX: "", TRIM_ZERO: true },
            WALLET_FORMAT: { TRIM_ZERO: true, IS_SHORT_FORMAT: false },
            BET_FORMAT:    { DECIMAL_COUNT: 0, TRIM_ZERO: true, IS_SHORT_FORMAT: false }
        },
        // US Dollar (2 decimals, cent unit 0.5¢)
        USD: {
            MONEY_FORMAT:  { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "$", TRIM_ZERO: false, CENT_UNIT: 0.5, CENT_SUFFIX: "¢" },
            WALLET_FORMAT: { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "$", TRIM_ZERO: false, CENT_UNIT: 0.5, CENT_SUFFIX: "¢" },
            BET_FORMAT:    { DECIMAL_COUNT: 2, IS_SHORT_FORMAT: false }
        },
        // Thai Baht
        THB: {
            MONEY_FORMAT:  { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "฿", TRIM_ZERO: false },
            WALLET_FORMAT: { DECIMAL_COUNT: 2, IS_SHORT_FORMAT: false },
            BET_FORMAT:    { DECIMAL_COUNT: 0, IS_SHORT_FORMAT: false }
        }
    };
}
```
