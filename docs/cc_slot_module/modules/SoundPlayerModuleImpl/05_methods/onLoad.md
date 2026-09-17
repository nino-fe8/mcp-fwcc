---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:onLoad"
title: "SoundPlayerModuleImpl.onLoad Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `SoundPlayerModuleImpl.onLoad()`

<!-- convention-summary-start -->
### SoundPlayerModuleImpl.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onLoad(): void {
    this._checkDuplicateAudioFile();
    this.node.setSiblingIndex(this.node.parent.children.length + 1);
    this.loadCacheConfig();

    if (this.isDebug) {
        warn("musicList", this.musicList.map(soundObj => soundObj.soundId));
        warn("sfxList", this.sfxList.map(soundObj => soundObj.soundId))
    }

    this.node.on('SET_UP_AUDIO_DATABASE', this._loadDynamicSounds.bind(this));

    game.on(cc.game.EVENT_HIDE, this._onEventHide, this);
    game.on(cc.game.EVENT_SHOW, this._onEventShow, this);

    this.isWebSound = (sys.isBrowser == true) && globalThis.Howl;

    if (this.isWebSound) {
        this._soundPlayer = new eno.HowlerSoundPlayer();
    } else {
        this._soundPlayer = new eno.CocosSoundPlayer();
    }

    this._soundPlayer.init(this.musicList, this.sfxList, this.node);

    if (this.isWebSound) {
        this._soundPlayer.loadSfxList(this.sfxList, () => {
        });
        this._soundPlayer.loadMusicList(this.musicList, () => {
            this._hasAudioContext = (globalThis.Howler.ctx && globalThis.Howler.ctx.state === 'running');
            if (!this._hasAudioContext) {
                this._waitForUserGesture();
            } else {
                this._soundPlayer.skipGesture();
            }
            this.playMainBGM();
        });
    } else if (sys.isMobile && sys.isBrowser) {
        this._waitForUserGesture();
    }
}
```
