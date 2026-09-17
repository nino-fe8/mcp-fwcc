---
id: "cc_slot_mechanics:systems:metagame_modifiers:collection_item"
title: "Collection Item Metagame Meters & Progression"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "collection_item", "metagame", "progression_meter"]
---

# 🧪 Collection Item Metagame Meters & Progression

<!-- convention-summary-start -->
### Collection Item Metagame Meters & Progression Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Collection Item Metagame Meters & Progression.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_metagame_and_modifiers_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Token Flying Tween & Meter Accumulation
When special scatter tokens land, `CollectionItemModule` spawns flying token particles towards the metagame HUD bar, filling progress toward unlocking higher RTP feature modes.
