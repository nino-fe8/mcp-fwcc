---
id: "cc_slot_module:systems:dual_audio_engine:audiocontext_unlock"
title: "Mobile Browser AudioContext Unlock & Gesture Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "ios_audio", "audiocontext_unlock", "user_gesture", "safari_audio"]
---

# 🔓 Mobile Browser AudioContext Unlock & Gesture Pipeline

<!-- convention-summary-start -->
### Mobile Browser AudioContext Unlock & Gesture Pipeline Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Mobile Browser AudioContext Unlock & Gesture Pipeline.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 12_dual_audio_engine_and_sound_pipeline
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. The Mobile Autoplay Restriction
Mobile browsers (iOS Safari, Android Chrome) block WebAudio playback until an explicit user interaction event (`touchstart`).

## 2. Gesture Pipeline Solution
`SoundPlayerModuleImpl` mounts a transparent fullscreen gesture interceptor (`userGestureNode`) on startup:
```typescript
_startPlayWithUserGesture(ev): void {
    ev.preventSwallow = true;
    this.node.off(Node.EventType.TOUCH_START, this._startPlayWithUserGesture, this);
    this._resumeContextGesture().then(() => {
        this._soundPlayer.resumeWithGesture();
    });
}
```
On iOS $\ge 14$, it safely suspends and resumes `Howler.ctx` to unlock uninterrupted sound.
