---
id: "cc_slot_module:GameModeDirectorModule:recipe:custom_mode_transition_animation"
title: "Recipe: Custom Game Mode Transition & Cutscene Orchestration"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "recipes", "transitions", "FreeGame", "cutscenes"]
---

# 💡 Recipe: Custom Game Mode Transition & Cutscene Orchestration

<!-- convention-summary-start -->
### Recipe: Custom Game Mode Transition & Cutscene Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom Game Mode Transition & Cutscene Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Concrete Production Use-Case

When triggering Free Game, play a dramatic dragon transition Spine cutscene, crossfade background music, and switch the table mode:

```typescript
export class NormalGameDirectorModule9666 extends GameModeDirectorModule {
    @property(cc.Node)
    dragonTransitionSpine: cc.Node = null;

    async transitionGameMode(targetMode: number): Promise<void> {
        const { isResume } = this.dataStore.playSession;

        if (isResume) {
            // Skip cutscenes when reconnecting to active session
            await this.enterGameMode(targetMode);
            return;
        }

        // 1. Play dramatic transition Spine
        this.dragonTransitionSpine.active = true;
        await this.playSpineAsync(this.dragonTransitionSpine, "dragon_roar");

        // 2. Crossfade BGM to Free Game
        this.soundPlayer.switchMusicBGM(targetMode, "SFX_FREE_TRANSITION", 1.5, 0.5);

        // 3. Switch active scene mode
        await this.enterGameMode(targetMode);
        this.dragonTransitionSpine.active = false;
    }
}
```
