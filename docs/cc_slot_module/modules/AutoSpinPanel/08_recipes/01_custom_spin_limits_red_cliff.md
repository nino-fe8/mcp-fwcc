---
id: "cc_slot_module:AutoSpinPanel:recipes:01_custom_spin_limits_red_cliff"
title: "Custom Spin Limits in Red Cliff"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Spin Limits in Red Cliff

<!-- convention-summary-start -->
### Custom Spin Limits in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Spin Limits in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { AutoSpinPanelConfig } from 'assets/cc-common/cc-slot-module/BasePortrait/AutoSpinPanel/AutoSpinPanelConfig';

@ccclass('AutoSpinPanelConfig9666')
export class AutoSpinPanelConfig9666 extends AutoSpinPanelConfig {
    AUTO_SPIN_NUMBERS = [10, 25, 50, 100, 500];
}
```
