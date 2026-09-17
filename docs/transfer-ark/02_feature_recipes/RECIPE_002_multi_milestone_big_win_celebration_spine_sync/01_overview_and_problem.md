---
id: "transfer-ark:feature:multi_milestone_big_win:01_overview"
title: "Multi-Milestone Big Win - Overview & Business Requirements"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "BaseCutscene", "WinEffectData9666", "WinEffectConfig9666"]
tags: ["big_win", "milestones", "overview", "business_rules"]
created_at: "2026-08-25"
updated_at: "2026-09-14"
author: "ARK Slot Engineering Team"
---

# 1. 📌 Problem & Business Requirements Overview

<!-- convention-summary-start -->
### Multi-Milestone Big Win - Overview & Business Requirements Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide cho hệ thống Big Win Celebration multi-milestone với Spine animation sync, tách biệt data layer (`WinEffectData9666`) và config layer (`WinEffectConfig9666`).
- **Key Mechanisms & Design**: `WinEffectModule9666` điều phối toàn bộ luồng; milestone traversal với `leadTime` early title switch; Spine Event–driven money count; BGM ducking cho Turbo; counting SFX loop; spacebar support.
- **Domain Capabilities**: feature, RECIPE_002_multi_milestone_big_win_celebration_spine_sync
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/`
- **Related Docs**: [Master Index](./INDEX.md)
<!-- convention-summary-end -->


---

## 1.1 Business Context & Requirements
Trong các video slot game hiện đại, các khoản thắng lớn phải trigger một celebration popup đa tầng với progressive milestones. Số lượng milestone và ratio threshold **được lấy từ server** qua `gameSettings.bigWinConfig[]` (không hardcode):

| Level Index | Tên điển hình | Điều kiện mặc định |
|:---:|:---|:---|
| **0** | Big Win | Total Win ≥ `bigWinConfig[0]` × Total Bet |
| **1** | Mega Win | Total Win ≥ `bigWinConfig[1]` × Total Bet |
| **2** | Super Mega Win | Total Win ≥ `bigWinConfig[2]` × Total Bet |

Khi total win vượt milestone cao hơn, popup **không nhảy thẳng** đến trạng thái cuối. Thay vào đó, phải đi qua từng milestone một cách tuần tự, leo thang anticipation.

---

## 1.2 Audiovisual & UX Choreography Goals

### 1. Dynamic Milestone Roll-Up với `leadTime` (Early Title Switch)
- Number tween đếm lên progressively qua từng milestone tier đã unlock.
- Mỗi milestone có `duration` (giây đếm) và `leadTime` (giây trước khi kết thúc tween thì switch title sớm sang level tiếp theo).
- `_tweenEarlySwitch` fire trước khi tween chính kết thúc `leadTime` giây, tạo cảm giác anticipation.
- Triggers audio cues: `WinEffectConfig9666.getLevelSound(levelIndex + 1)` khi đạt mỗi tier.

### 2. Seamless Spine Animation Transitions
- Plays milestone entrance animation (`getInAnim(levelIndex)`), chuyển sang loop (`getLoopAnim(levelIndex)`) khi hoàn thành.
- Smooth skeleton mix transitions qua `initSkeletonMix()` với duration từ `WinEffectConfig9666.SPINE_MIX_DURATION`.
- Khi nâng level mid-tween: chỉ `clearTracks()` + `setToSetupPose()` nếu `levelIndex === 0` hoặc chưa có track.
- **Fallback nếu không có Spine**: `playLevelAnim()` gọi `triggerMoneyCount()` trực tiếp.

### 3. Spine Event–Driven Money Count Trigger
- Lắng nghe **Spine Event** tên `slot_money` (configurable qua `eventNameMoneyCount: string` property).
- Khi event fire: `triggerMoneyCount()` được gọi để fade in win amount và bắt đầu counting.
- **Fallback**: `setCompleteListener` cũng gọi `triggerMoneyCount()` khi intro anim hoàn thành.
- **Guard**: `_hasTriggeredMoneyCount` đảm bảo `triggerMoneyCount()` chỉ chạy **một lần duy nhất** dù cả hai cơ chế cùng fire.
- Ngoài ra, `showEffectWin()` schedule `triggerMoneyCount` sau `WinEffectConfig9666.INTRO_DELAY` giây làm backup cuối cùng.

### 4. Win Amount Fade-In
- Khi `triggerMoneyCount()` được gọi, win amount label **fade in** từ opacity 0 → 255 trong `FADE_IN_AMOUNT_DURATION` giây.
- `_tweenWinAmountFade` được cleanup kỹ trong skip/fast/exit.

### 5. Dynamic Money Label Tracking (`slot_money` Bone)
- Win amount label neo vào Spine bone `WinEffectConfig9666.SPINE_BONE_SLOT_MONEY` trong world space.
- Label có bounce, scale, movement tự nhiên theo character animation.
- **Sync trong `update()`** mỗi frame khi `popupState` là `COUNTING` hoặc `COUNTING_COMPLETED` VÀ `bigWinSkeleton.node.active`.

### 6. Intuitive Touch & Keyboard Controls
- **Touch/Click**: Tap trong `COUNTING` → skip milestone hiện tại, advance sang milestone tiếp.
- **Spacebar**: `onEnable` đăng ký `KEY_UP` event → `skipFromSpace()` → `onClick()` với các guard tương tự.
- **Click Throttle**: `WinEffectConfig9666.CLICK_THROTTLE_MS` (300ms) chống rapid-fire multi-touch.
- **Debounce Lock**: `DEBOUNCE_CLOSE_TIME` (1.0s) sau khi counting kết thúc.
- **Auto-Close**: `AUTO_CLOSE_TIME` (3.0s) sau `COUNTING_COMPLETED` nếu không có interaction.

### 7. Turbo / Fast-To-Result Compatibility
- Detect qua `gameSettings.isTurboActive || gameSettings.isFastToResult` ngay đầu `enter()`.
- **BGM Ducking** (thay vì tắt BGM): `_duckCurrentBgm()` fade volume xuống `duckedBgmRatio` (0.5). `_bgmDucked` flag tránh duck nhiều lần.
- Restore BGM trong `onDisable()`, `exit()`, `onDestroy()`.
- Plays `SOUND_SHORTEN` SFX thay vì full bigwin BGM.
- `showFastEffectWin()`: tắt `bigWinSkeleton`, `overlayNode`, `winInfo`, set `winAmount.opacity = 255`, clear event listener, delegate lên `super.showFastEffectWin()`.

### 8. Counting SFX Loop
- `playSoundCounting()` stop rồi play `sfxCountingId` (configurable), schedule `retriggerCountingSfx` mỗi **1.5 giây**.
- `stopCountingLoopSfx()`: dừng schedule và stop SFX.
- Khi `finishCounting()`: `playSoundCountingEnd()` → `stopCountingLoopSfx()` + play `sfxCountingStopId`.

### 9. Free Game BGM Resume
- `resumeMainBGM()` kiểm tra `currentGameMode` trước khi fade về main BGM.
- Nếu đang ở `FREE_GAME` / `FREE_OPTION_GAME`: switch về `SOUND_FREE_BGM`.
- Nếu đang transition sang Free Game (`_isTransitioningToFreeGame()`): **skip** resume để tránh race condition.

---

## 1.3 Architecture: Three-Layer Separation

```
WinEffectModule9666        (Controller/Presenter Layer)
    │  extends WinEffectModule (SDK base)
    │  Owns: tween management, lifecycle, input, Spine anim, sound
    │  Accesses data via backward-compatible getter/setter accessors
    │
    ├──► WinEffectData9666   (Data/State Layer - auto-added Component)
    │       State: popupState, milestones[], currentMilestoneIdx,
    │              currentDisplayAmount, totalWinAmount, canClickToClose,
    │              hasTriggeredMoneyCount, isMoneySlotMoving, lastClickTime
    │       Logic: setupMilestones(), advanceMilestone(), getCurrentMilestone(),
    │              hasNextMilestone(), getTrueFinalLevel(), getLerpAmount(),
    │              isCentCurrency(), calculateCentRatio(), formatDisplayWinAmount()
    │
    └──► WinEffectConfig9666 (Config/Constants Layer - static class)
            Constants: INTRO_DELAY, FADE_IN_AMOUNT_DURATION, CLICK_THROTTLE_MS,
                       DEBOUNCE_CLOSE_TIME, AUTO_CLOSE_TIME, SPINE_MIX_DURATION,
                       SPINE_BONE_SLOT_MONEY, SPINE_MIX_PAIRS[], SOUND_*,
                       DEFAULT_MILESTONE_DURATIONS[], DEFAULT_MILESTONE_LEAD_TIMES[]
            Methods:  getLevelSound(level), getInAnim(level), getLoopAnim(level)
```

> **Backward-Compatible Accessors**: `WinEffectModule9666` expose `_popupState`, `_milestones`, v.v... như getter/setter để delegate về `WinEffectData9666`. Code cũ dùng chúng trực tiếp vẫn hoạt động.

---

## 1.4 Vendor SDK vs ARK Business Discrepancy

| Aspect | Vendor SDK Default (`WinEffectModule`) | ARK Business Requirement (`WinEffectModule9666`) |
| :--- | :--- | :--- |
| **Milestone Model** | Single linear tween với threshold polling | Dynamic `IMilestone[]` với `startLevel`, `leadTime`, multi-tier |
| **Visual Assets** | Switches 2D SpriteFrames (`titleFrame`) | Choreographed Spine animations (`in` → `loop`) |
| **Label Positioning** | Static centered label | Dynamic World-Space bone tracking (`slot_money`) mỗi frame |
| **Money Count Trigger** | Delay tự động | Spine Event `slot_money` + `completeListener` fallback + `scheduleOnce` backup |
| **Touch Interaction** | Single click fast-forwards total | Per-milestone skip + Spacebar + 1.0s debounce + 3.0s auto-close |
| **State Management** | Implicit boolean flags | Explicit 4-state `WinPopupState` trong `WinEffectData9666` |
| **Data Layer** | Inline trong module | Tách ra `WinEffectData9666` component riêng |
| **Config Layer** | Hardcoded constants | `WinEffectConfig9666` static class |
| **BGM (Turbo)** | Không xử lý | Duck BGM (`fadeMusicTo`) + restore khi exit/disable/destroy |
| **Counting SFX** | Đơn giản | Loop SFX với reschedule mỗi 1.5s |
| **Free Game BGM** | Không xử lý | Check `currentGameMode` + `getNextGameMode()` trước khi fade |
