---
id: "cc_slot_module:SlotBaseModule:recipes:creating_new_game_mode_submodule"
title: "Recipe: Creating a New Custom SlotBaseModule Subclass"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "recipes", "subclass_template"]
---

# 💡 Recipe: Creating a New Custom SlotBaseModule Subclass

<!-- convention-summary-start -->
### Recipe: Creating a New Custom SlotBaseModule Subclass Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Creating a New Custom SlotBaseModule Subclass.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete TypeScript Template

```typescript
const { ccclass, property } = cc._decorator;
import { SlotBaseModule } from "cc-common/cc-slot-module/Core/SlotBaseModule";

@ccclass
export class CustomFeatureModule extends SlotBaseModule {
    @property(cc.Node)
    featureVFX: cc.Node = null;

    private _featureModel: any = null;

    onLoadExtend(): void {
        this.setupObservers();
    }

    protected registerEvents(): void {
        if (this.moduleEvent) {
            this.moduleEvent.on("START_SPIN", this.onStartSpin, this);
        }
        if (this.eventManager) {
            this.eventManager.on("GLOBAL_FEATURE_TRIGGERED", this.onFeatureTrigger, this);
        }
    }

    private setupObservers(): void {
        this._featureModel = this.gameLogic.getDataModel().CustomFeatureData;
        if (this._featureModel) {
            this.observer.watch(
                this._featureModel, 
                "isActive", 
                this.onFeatureActiveChange.bind(this), 
                this, 
                { fireImmediately: true }
            );
        }
    }

    protected resetAllEffectAndTasks(): void {
        if (this.featureVFX) {
            this.featureVFX.active = false;
        }
    }

    private onStartSpin(): void {
        this.resetAllEffectAndTasks();
    }

    private onFeatureActiveChange(isActive: boolean): void {
        if (this.featureVFX) {
            this.featureVFX.active = isActive;
        }
    }

    private onFeatureTrigger(data: any): void {
        // Handle trigger
    }

    onDestroy(): void {
        if (this.observer && this._featureModel) {
            this.observer.releaseAll(this._featureModel, this);
        }
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }
    }
}
```
