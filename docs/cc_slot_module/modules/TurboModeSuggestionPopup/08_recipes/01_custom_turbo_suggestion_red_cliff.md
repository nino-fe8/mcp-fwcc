---
id: "cc_slot_module:TurboModeSuggestionPopup:recipes:01_custom_turbo_suggestion_red_cliff"
title: "Custom Turbo Suggestion in Red Cliff"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Turbo Suggestion in Red Cliff

<!-- convention-summary-start -->
### Custom Turbo Suggestion in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Turbo Suggestion in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { TurboModeSuggestionPopup } from 'assets/cc-common/cc-slot-module/BasePortrait/TurboModeSuggestionPopup/TurboModeSuggestionPopup';

@ccclass('TurboModeSuggestionPopup9666')
export class TurboModeSuggestionPopup9666 extends TurboModeSuggestionPopup {
    onConfirm(): void {
        super.onConfirm();
    }
}
```
