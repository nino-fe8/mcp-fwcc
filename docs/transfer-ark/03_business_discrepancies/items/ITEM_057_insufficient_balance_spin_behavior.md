---
id: "transfer-ark:discrepancy:item_057_insufficient_balance_spin_behavior"
title: "Item #56 (Doc #57): Insufficient Balance Spin Behavior & Modal Trigger"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetManager", "SlotGameLogic", "SlotButtonNormal", "DialogMessageModule"]
tags: ["discrepancy_item_56", "insufficient_balance", "popup", "reels_spin", "refer_standard", "sfx"]
created_at: "2026-08-28"
updated_at: "2026-09-07"
author: "ARK Slot Engineering Team"
---

# 📌 Item #56 (Doc #57): Insufficient Balance Spin Behavior & Modal Trigger

<!-- convention-summary-start -->
### Insufficient Balance Spin Behavior & Modal Trigger Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, player interaction, and sound trigger differences between Cocos Creator and Reference Game for Item #56: Insufficient Balance Spin Behavior & Modal Trigger.
- **Key Mechanisms & Design**: Adopts Theo Ref (Reference Game Standard). When player taps Spin with insufficient balance, the reel spins and the "Not Enough Money" modal appears. Audio-wise, the tap is treated as a generic button press (`9666_button_click` / `BTN_GENERAL`), suppressing the spin sound (`9666_btn_spin` / `BTN_SPIN`).
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonNormal.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->

- **Excel Reference Row**: `#56` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel / WA)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Tapping Spin When Balance < Bet** | Khi thiếu tiền, bấm spin sẽ hiển thị pop up thiếu tiền, reel không quay. | Khi thiếu tiền, bấm spin reel vẫn quay và hiện pop up thiếu tiền. | **Theo Ref**: Khi thiếu tiền, bấm spin reel vẫn quay và hiển thị pop up thiếu tiền. |
| **Audio SFX Feedback** | Mặc định phát ngay âm thanh spin `9666_btn_spin` (`BTN_SPIN`) do thiếu kiểm tra số dư trước khi phát âm thanh. | Nhận diện đây không phải lượt spin hợp lệ, chỉ phát âm thanh click nút `9666_button_click` (`BTN_GENERAL`). | **Theo Ref / Audio Standard**: Chỉ phát `soundPlayer.playSFXClick()` (`9666_button_click`). Tuyệt đối không phát `sfxSpinId` (`9666_btn_spin`). |

---

## 2. 🎧 Audio & Code Implementation Details

### Root Cause
Trong `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonNormal.ts`, hàm `onSpinClick()` gọi `this.playSfxSpin()` vô điều kiện trước khi emit event `NORMAL_SPIN_CLICKED`. Lúc này số dư ví chưa được kiểm tra, khiến âm thanh `sfxSpinId` (`9666_btn_spin`) phát ra ngay cả khi người chơi không đủ tiền.

### Resolved Implementation
Trong `SlotButtonNormal.ts`, thêm hàm `checkHasEnoughBalance()` và cập nhật `playSfxSpin()`:

```typescript
playSfxSpin(): void {
    const allowStatePlay = this.state === SPIN_BUTTON_STATE_ENUM.NORMAL || this.state === SPIN_BUTTON_STATE_ENUM.HOVER;
    if (!this.soundPlayer || this.skipSound || !allowStatePlay) {
        return;
    }

    const hasEnoughBalance = this.checkHasEnoughBalance();
    if (this.sfxSpinId && hasEnoughBalance) {
        this.soundPlayer.playSfx(this.sfxSpinId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}

checkHasEnoughBalance(): boolean {
    if (this.hasPromotion) {
        return true;
    }
    try {
        const currentMode = this.gameLogic?.getGameModeManager?.()?.getCurrentMode?.();
        if (currentMode && typeof currentMode.hasEnoughBalance === "function") {
            return currentMode.hasEnoughBalance();
        }
        const walletManager = this.gameLogic?.getWalletManager?.();
        const betManager = this.gameLogic?.getBetManager?.();
        if (walletManager && betManager && typeof walletManager.hasEnoughBalance === "function" && typeof betManager.getTotalBet === "function") {
            return walletManager.hasEnoughBalance(betManager.getTotalBet());
        }
    } catch (e) {
        // Fallback safe
    }
    return true;
}
```
