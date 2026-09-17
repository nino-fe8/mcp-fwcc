---
id: "cc_slot_module:systems:gui_dashboard:trial_mode_promotions_and_notifications"
title: "Trial Mode, Promotional Spins & In-Game Toast Notifications"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "trial_mode", "promotion", "toast_info", "notifications"]
---

# 🎁 Trial Mode, Promotional Spins & In-Game Toast Notifications

<!-- convention-summary-start -->
### Trial Mode, Promotional Spins & In-Game Toast Notifications Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Trial Mode, Promotional Spins & In-Game Toast Notifications.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_gui_dashboard_and_controls_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Trial Play Subsystem (`TrialModeManager`)

- Mounts at `Canvas/Director/TrialMode`.
- Shows persistent **"TRIAL MODE"** watermark banner.
- Renders `BackToRealModeButton` allowing players to seamlessly switch to authenticated real play.
- Deactivates real progressive jackpots and switches to simulated counters (`TrialJackpotModule`).

---

## 2. Promotional Spins Subsystem (`IconPromotion`)

- Mounts under `Canvas/Director/UIManager/Promotion`.
- When server sends active campaign metadata (`PromotionData.isActive = true`):
  - Hides standard spin text on `SlotButtonNormal`.
  - Displays remaining promotional free rounds badge.
  - Automatically resets when promotional rounds deplete.

---

## 3. In-Game Toast Banners (`ToastInfoModule`)

- Mounts at `Canvas/Director/Toast`.
- Displays animated transient popup messages for:
  - Low balance alerts ("Insufficient funds to spin").
  - Bet limits reached ("Max bet level active").
  - Network jitter warning toasts.
