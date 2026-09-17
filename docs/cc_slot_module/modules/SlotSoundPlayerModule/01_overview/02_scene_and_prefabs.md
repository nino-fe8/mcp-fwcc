---
id: "cc_slot_module:SlotSoundPlayerModule:overview:scene_and_prefabs"
title: "SlotSoundPlayerModule Scene Node Placement & Prefab Wiring"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotSoundPlayerModule Scene Node Placement & Prefab Wiring

<!-- convention-summary-start -->
### SlotSoundPlayerModule Scene Node Placement & Prefab Wiring Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSoundPlayerModule Scene Node Placement & Prefab Wiring.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotSoundPlayerModule` is mounted on the `SlotSoundPlayer` child node directly under `Canvas/Director`:

```text
Canvas
└── Director
    ├── GameMode (MainGamePrefab, FreeGamePrefab, BonusGamePrefab)
    ├── UIManager (UIManagerModule)
    ├── CutsceneControl (CutsceneController)
    ├── PopupControl (PopupControllerModule)
    └── SlotSoundPlayer [Node]
        ├── [Component 1] SlotSoundPlayerModule (Audio Manager & SFX Dispatcher)
        └── [Component 2] SoundConvertList (Audio clip mapping & dynamic sound converter)
```

---

## 2. Injected Audio Clips & Channels

| Attached Component | Type | Responsibility |
| :--- | :--- | :--- |
| **`SlotSoundPlayerModule`** | `SlotBaseModule` | BGM playback, loop management, win roll audio loops, mobile unlock audio context. |
| **`SoundConvertList`** | `cc.Component` | Maps string sound keys (`SPIN_CLICK`, `REEL_STOP`, `NEAR_WIN`, `PAYLINE_WIN`) to `cc.AudioClip` assets. |
