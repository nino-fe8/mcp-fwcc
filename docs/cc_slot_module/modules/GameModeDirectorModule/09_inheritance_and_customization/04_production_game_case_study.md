---
id: "cc_slot_module:GameModeDirectorModule:customization:production_game_case_study"
title: "Production Case Study: Mode Management in Red Cliff Slot"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "customization", "case_study", "red_cliff", "production_code"]
---

# 📖 Production Case Study: Mode Management in Red Cliff Slot

<!-- convention-summary-start -->
### Production Case Study: Mode Management in Red Cliff Slot Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: Mode Management in Red Cliff Slot.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Context & Architecture Overview

In **Red Cliff (`g9666L`)**, `NormalGameDirectorModule9666` and `FreeGameDirectorModule9666` inherit from `GameModeDirectorModule` to manage scene node switching, matrix synchronizations, and multiplier resets.

---

## 2. Production Code Excerpt

```typescript
@ccclass
export default class NormalGameDirectorModule9666 extends GameModeDirectorModule {
    onExtendedLoad(): void {
        super.onExtendedLoad();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(NormalGameWriterModule9666);
        this.init();
    }

    async onBackToGameMode(fromMode: number): Promise<void> {
        // Reset progressive multipliers upon returning to Normal Game
        await this.eventManager.emit("RESET_MULTIPLIER", false);
        return super.onBackToGameMode(fromMode);
    }
}
```
