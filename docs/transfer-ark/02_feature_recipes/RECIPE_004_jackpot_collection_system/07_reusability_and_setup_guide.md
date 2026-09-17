---
id: "transfer-ark:feature:jackpot_collection:07_reusability"
title: "Jackpot Collection - Reusability & Setup Guide"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotCollectionModule", "JackpotCollectionItem"]
tags: ["setup_guide", "prefab_hierarchy", "inspector", "porting_checklist"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 7. ♻️ Reusability & Setup Guide for New Games

<!-- convention-summary-start -->
### Jackpot Collection - Reusability & Setup Guide Summary

- **Core Architecture / Purpose**: Step-by-step instructions for creating Prefabs, hierarchy layout, Inspector bindings, and testing verification.
- **Key Mechanisms & Design**: Practical checklist for developers to integrate Jackpot Collection into any new game in under 30 minutes.
- **Domain Capabilities**: feature, RECIPE_004_jackpot_collection_system
- **Scope & Code Paths**: `assets/cc-release-slot/<game_id>/data/prefabs/Gui/Jackpot/`
- **Related Docs**: [05. Full Implementation Code](./05_full_implementation_code.md), [INDEX.md](./INDEX.md)
<!-- convention-summary-end -->

---

## 7.1 Prefab 1: `jackpotCollectionItem.prefab`

Create at `assets/cc-release-slot/<game_id>/data/prefabs/Gui/Jackpot/jackpotCollectionItem.prefab`:

### Node Hierarchy:
```text
jackpotCollectionItem (Node with JackpotCollectionItem script)
├── bg (cc.Node with cc.Sprite - optional item frame background)
├── spine (cc.Node with sp.Skeleton - main symbol avatar)
├── collect (cc.Node with sp.Skeleton - burst & collect done aura)
├── lbProgress (cc.Node with cc.Label - string e.g. "0/5")
├── checkmark (cc.Node with cc.Sprite - static fallback checkmark, active=false)
└── mark (cc.Node with sp.Skeleton - celebratory animated tick, active=false)
```

### Inspector Configuration:
- Drag each child node into the corresponding property on the `JackpotCollectionItem` component.
- Check animation property names match Spine assets:
  - `animIdle`: `idle_reel_1`
  - `animIdleFallback`: `idle`
  - `animActive`: `active_reel_1`
  - `animActiveFallback`: `active`
  - `animCollect`: `eff_coll_symbol`
  - `animCollectDone`: `eff_coll_done_symbol`
  - `animMarkIn`: `in_eff_tick_coll_symbol`
  - `animMarkIdle`: `idle_eff_tick_coll_symbol`

---

## 7.2 Prefab 2: `Jackpot.prefab`

Create at `assets/cc-release-slot/<game_id>/data/prefabs/Gui/Jackpot/Jackpot.prefab`:

### Node Hierarchy:
```text
Jackpot (Root Node)
├── (Attached Component: JackpotCollectionConfig)
├── (Attached Component: JackpotCollectionData)
└── (Attached Component: JackpotCollectionModule)
    ├── itemContainer (cc.Node with cc.Layout - horizontal or vertical alignment)
    └── bgBoard (cc.Node with cc.Sprite - collection panel wooden board / banner)
```

### Inspector Configuration:
- On `JackpotCollectionConfig`:
  - Add entries to `symbolSpriteMappings` for each high-paying symbol (e.g. Code `"3"`, `"4"`, `"5"`) and assign their Spine `SkeletonData`.
- On `JackpotCollectionModule`:
  - `itemPrefab`: Link `jackpotCollectionItem.prefab`.
  - `itemContainer`: Link `itemContainer` node.
  - `sfxCollectSymbolId`: `"COLLECT_SYMBOL"`.
  - `sfxCollectCompleteId`: `"COLLECT_COMPLETE"`.

---

## 7.3 Integration into Reel Table & Cascade

In your `CompositeCascade<GameId>.ts`:
```typescript
// After paying out cascade win
await this.moduleEvent.emit('UPDATE_JACKPOT_COLLECTION');

// After falling symbols finish tumbling
await this.moduleEvent.emit('CASCADE_SYMBOLS_FILLED');
```

---

## 7.4 Verification & Testing Checklist

- [ ] **Instantiation**: On game launch, collection bar displays slots matching symbols from server config.
- [ ] **First Win Increment**: Land a win containing symbol 1. Verify `lbProgress` increments, `COLLECT_SYMBOL` audio plays, character plays active animation.
- [ ] **Tick Completion**: Fulfill last quota of symbol 1. Verify:
  - Spine `mark` plays `in_eff_tick_coll_symbol` then loops `idle_eff_tick_coll_symbol`.
  - Spine `collect` continues looping `eff_coll_done_symbol`.
  - Label shows `5/5`.
- [ ] **Full Board Win**: Fulfill all symbol quotas. Confirm `COLLECT_COMPLETE` plays and cutscene `JACKPOT_WIN` triggers 0.5s after tumble ends.
- [ ] **Reconnection (F5)**: Refresh mid-spin during winning cascade. Confirm count is subtracted correctly upon resume and increments naturally during replay.
