---
id: "transfer-ark:discrepancy:items_master_index"
title: "Master Index of Cocos vs Pixi.js Discrepancy Items"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
tags: ["master_index", "discrepancy_items", "refer_matrix", "transfer_ark"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📚 Master Index of Cocos vs Pixi.js Discrepancy Items

<!-- convention-summary-start -->
### Master Index of Cocos vs Pixi.js Discrepancy Items Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Master Index of Cocos vs Pixi.js Discrepancy Items.
- **Key Mechanisms & Design**: Adopts Theo Ref. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [ITEM_002: Non-blocking Action Panel Buttons While Spinning](./ITEM_002_non_blocking_buttons_while_reels_spinning.md), [ITEM_003: Direct Bet Size Adjustment Without Bet Options Popup](./ITEM_003_direct_bet_size_without_bet_options_popup.md), [ITEM_004: Hold Spin Button to Trigger Auto Spin](./ITEM_004_hold_spin_button_to_auto_spin.md)
<!-- convention-summary-end -->


This directory contains itemized specifications and codebase override recipes corresponding 1-to-1 with every row from `Compare Cocos vs Pixijs.xlsx`.

---

## 🗂️ 1. Base Game & Action Panel
- [ITEM_002: Non-blocking Action Panel Buttons While Spinning](./ITEM_002_non_blocking_buttons_while_reels_spinning.md)
- [ITEM_003: Direct Bet Size Adjustment Without Bet Options Popup](./ITEM_003_direct_bet_size_without_bet_options_popup.md)
- [ITEM_004: Hold Spin Button to Trigger Auto Spin](./ITEM_004_hold_spin_button_to_auto_spin.md)
- [ITEM_007: Max Win Constraint Elimination](./ITEM_007_max_win_constraint_elimination.md)
- [ITEM_031: Spin Button Three States Standardization](./ITEM_031_spin_button_three_states_standardization.md)
- [ITEM_055: Auto Spin Cancellation UI State Transition Timing](./ITEM_055_auto_spin_cancellation_ui_timing.md)
- [ITEM_056: Wallet Balance Deduction Visual Timing](./ITEM_056_wallet_balance_deduction_visual_timing.md)
- [ITEM_057: Insufficient Balance Spin Behavior & Modal Trigger](./ITEM_057_insufficient_balance_spin_behavior.md)
- [ITEM_074: Idle 30-Minute Timeout Popup Suppression](./ITEM_074_idle_timeout_popup_suppression.md)

---

## 🗂️ 2. Big Win, Free Game & Mode Transitions
- [ITEM_013: Skip Big Win Celebration in Turbo / F2R Mode](./ITEM_013_skip_big_win_celebration_in_turbo_f2r_mode.md)
- [ITEM_014: Setting and Info Buttons Accessibility in Free Game](./ITEM_014_setting_and_info_buttons_in_free_game.md)
- [ITEM_015: Auto Spin Cancellation Upon Entering Free Game](./ITEM_015_auto_spin_cancellation_on_free_game_transition.md)
- [ITEM_050: Free Spins HUD Title and Turn Counters](./ITEM_050_free_spins_hud_title_and_turn_counters.md)
- [ITEM_061: Game Version Display In Setting Menu Only](./ITEM_061_game_version_display_in_setting_only.md)
- [ITEM_062: Symbol Click Payout Suppression In Free Game](./ITEM_062_symbol_click_payout_suppression_in_free_game.md)
- [ITEM_063: Single Combined Payline Presentation On Matrix Board](./ITEM_063_single_combined_payline_presentation.md)
- [ITEM_064: Spin Button Single State In Free Game](./ITEM_064_free_game_spin_button_state.md)
- [ITEM_065: Bet Information Display In Free Game Mode](./ITEM_065_bet_info_display_in_free_game.md)
- [ITEM_066: Win Display Box & Win Accumulation In Free Game](./ITEM_066_win_display_and_accumulation_in_free_game.md)
- [ITEM_067: Sound Toggle Via Setting Menu In Free Game Mode](./ITEM_067_sound_toggle_via_setting_in_free_game.md)
- [ITEM_068: Paybar Tips vs Win Amount Presentation In Free Game](./ITEM_068_paybar_ktt_tips_vs_amount_in_free_game.md)
- [ITEM_070: Total Win Summary Popup and Coin Count-up Rules](./ITEM_070_total_win_summary_popup_and_countup_rules.md)

---

## 🗂️ 3. Lịch Sử Cược (LSC) & Lịch Sử Hũ (LSH)
- [ITEM_005: Paybar Click Opens Bet History Suppression](./ITEM_005_paybar_click_opens_lsc_suppression.md)
- [ITEM_006: Backdrop Click To Close LSC & LSH Popup Modal](./ITEM_006_backdrop_click_to_close_lsc_lsh_modal.md)
- [ITEM_012: Session ID Copy Button Removal in Bet History](./ITEM_012_session_id_copy_button_removal.md)
- [ITEM_032: Empty State Pagination Buttons Disabled Behavior](./ITEM_032_empty_state_pagination_buttons_behavior.md)
- [ITEM_035: Row Hover Highlight & Feature Indicator Dots in Bet History](./ITEM_035_row_hover_highlight_and_feature_dots.md)
- [ITEM_037: Column Headers Structure & Page X/Y Pagination](./ITEM_037_column_headers_structure_standardization.md)
- [ITEM_040: Session Summary Screen For Normal & Free Game Details](./ITEM_040_session_summary_screen_for_normal_and_free.md)
- [ITEM_042: Timestamp Display Format In Bet History](./ITEM_042_timestamp_format_dd_mm_hh_mm_ss.md)
- [ITEM_045: Detailed Payout and Rewards Section In History Detail](./ITEM_045_detailed_payout_and_rewards_section.md)
- [ITEM_047: Title Bar Close vs Back Button Behavior in History](./ITEM_047_title_bar_close_vs_back_button_behavior.md)

---

## 🗂️ 4. Popups, Settings Menu, Âm Thanh & Mạng
- [ITEM_001: Backdrop Click To Dismiss Any Active Popup Modal](./ITEM_001_backdrop_click_to_dismiss_any_popup.md)
- [ITEM_009: Unified Game Info Popup Combining Rules and Paytable](./ITEM_009_unified_game_info_rules_paytable_popup.md)
- [ITEM_010: Exit Confirmation Popup Before Game Departure](./ITEM_010_exit_confirmation_popup_behavior.md)
- [ITEM_011: Exit Button Always Visible and Disabled When &ru Is Absent](./ITEM_011_exit_button_always_visible_and_disabled_without_ru.md)
- [ITEM_020: Independent BGM and SFX Audio Toggle Controls](./ITEM_020_independent_bgm_and_sfx_toggle_buttons.md)
- [ITEM_052: Setting Menu Buttons Layout & Structure Composition](./ITEM_052_setting_menu_buttons_layout_composition.md)
- [ITEM_053: Mouse Cursor Hover Pointer Styling Standardization](./ITEM_053_cursor_hover_pointer_standardization.md)
- [ITEM_054: Network Disconnect Popup & Retry Handling With Return URL](./ITEM_054_network_disconnect_popup_and_retry_with_ru.md)

---

## 🗂️ 5. Matrix, Paylines & Trả Thưởng
- [ITEM_008: Disable Symbol Click Payout On Reel Matrix Board](./ITEM_008_disable_symbol_click_payout_on_matrix.md)
- [ITEM_027: Single Unified Payline Display For Multi-Symbol Combines](./ITEM_027_single_payline_for_multi_symbol_combines.md)
- [ITEM_028: Paybar Tips Suppression & Win Text Formatting](./ITEM_028_paybar_ktt_tips_and_win_text_formatting.md)
- [ITEM_029: Standalone Win Box Removal In Favor Of Paybar](./ITEM_029_win_box_display_standardization.md)
- [ITEM_030: Currency Symbol & Denomination Display Standards](./ITEM_030_currency_symbol_and_denom_display.md)
- [ITEM_058: All Ways Text and Dynamic Ways Count Display](./ITEM_058_all_ways_text_and_ways_count_display.md)

---

## 🗂️ 6. Demo Mode (Trial) vs Real Money Mode
- [ITEM_016: Trial Mode Button Placement on Action Panel](./ITEM_016_trial_mode_button_placement.md)
- [ITEM_017: Auto Spin Reset to Idle When Continuing Trial Mode](./ITEM_017_auto_spin_reset_on_continue_trial_mode.md)
- [ITEM_018: Confirmation Notification When Switching To Real Money](./ITEM_018_notification_when_switching_to_real_money.md)
- [ITEM_019: Force Return To Real Money Mode During Ongoing Free Game](./ITEM_019_force_return_to_real_money_during_free_game.md)

---

## 🗂️ 7 & 8. Splash, Viewport, Resume & Jackpot
- [ITEM_021: Loading Bar Text & Loading Animation Standard](./ITEM_021_loading_bar_text_and_animation_standard.md)
- [ITEM_022: Auto-Enter Action Panel Upon 100% Loading (Bypass Tap To Start)](./ITEM_022_auto_enter_action_panel_after_loading.md)
- [ITEM_024: Pre-ingame Transition Smoothing & Asset Prewarming](./ITEM_024_pre_ingame_transition_smoothing.md)
- [ITEM_025: Full-size Background Adapter & PC Resize Black Screen Fix](./ITEM_025_fullsize_background_and_pc_resize_fix.md)
- [ITEM_071: Landscape Orientation Enforcement & Fullscreen Expansion](./ITEM_071_landscape_portrait_enforcement_and_fullscreen.md)
- [ITEM_072: Resume Session Popup Interaction Via Space & Click](./ITEM_072_resume_popup_space_and_click_dismiss.md)
- [ITEM_026: Real-time Jackpot Notification & QC Cheat Testing Recipe](./ITEM_026_jackpot_notification_and_qc_cheat_recipe.md)
