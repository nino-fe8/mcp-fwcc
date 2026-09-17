---
id: "cc_slot_module:systems:gui_dashboard:betting_matrix_and_denominations"
title: "Betting Matrix, Denominations & Ante-Bet Modifier Mechanics"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "betting", "denominations", "extra_bet", "max_bet"]
---

# 💰 Betting Matrix, Denominations & Ante-Bet Modifier Mechanics

<!-- convention-summary-start -->
### Betting Matrix, Denominations & Ante-Bet Modifier Mechanics Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Betting Matrix, Denominations & Ante-Bet Modifier Mechanics.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_gui_dashboard_and_controls_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Mathematical Total Bet Formula

The total bet per spin is computed from three primary parameters configured in `GameConfig`:

$$\text{Total Bet} = \text{Bet Multiplier} \times \text{Denomination (Denom)} \times \text{Base Lines/Ways Factor} \times \text{Ante-Bet Multiplier}$$

Where:
- **`Bet Multiplier`**: Stepped integer index (e.g. $1, 2, 5, 10$).
- **`Denom`**: Currency value per credit (e.g. $0.01, 0.05, 0.10, 0.50, 1.00$).
- **`Base Factor`**: Payout engine base cost ($20$ for 20 lines, $25$ or $50$ for 243 AllWays).
- **`Ante-Bet Multiplier`**: $1.25\times$ or $1.50\times$ when `ExtraBetModule` is active.

---

## 2. Components in the Bet Subsystem

1. **`BetModule` (`Canvas/Director/UIManager/Bet`)**:
   - Manages plus/minus increment stepper buttons, rapid long-press repeat, and max bet triggers.
2. **`DenomLabel` / `TotalBetLabel`**:
   - Reactive text formatters rendering formatted currency values via `MoneyFormatter.formatMoney()`.
3. **`ExtraBetModule` (`Canvas/Director/UIManager/ExtraBet`)**:
   - Toggle switch for Golden Bet / Ante-Bet modifiers that increases Scatter spawn frequency in exchange for higher bet cost.
