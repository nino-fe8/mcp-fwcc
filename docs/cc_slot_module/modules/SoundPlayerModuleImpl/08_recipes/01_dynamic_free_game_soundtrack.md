---
id: "cc_slot_module:SoundPlayerModuleImpl:recipes:dynamic_soundtrack"
title: "Recipe: Dynamically Loading and Crossfading Free Spins BGM"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "recipes"]
---

# 💡 Recipe: Dynamically Loading and Crossfading Free Spins BGM

<!-- convention-summary-start -->
### Recipe: Dynamically Loading and Crossfading Free Spins BGM Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Dynamically Loading and Crossfading Free Spins BGM.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


```typescript
// Trigger crossfade to Free Game BGM over 1.5s
soundPlayer.changeMusic("MUSIC_FREE_GAME", true, 1.0, 1.5);
```
