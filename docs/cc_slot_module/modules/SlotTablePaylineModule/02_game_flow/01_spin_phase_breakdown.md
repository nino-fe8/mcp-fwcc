---
id: "cc_slot_module:SlotTablePaylineModule:game_flow:spin_phase_breakdown"
title: "SlotTablePaylineModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTablePaylineModule Spin Phase Breakdown

<!-- convention-summary-start -->
### SlotTablePaylineModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotTablePaylineModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Payline Activity Across Spin Phases

```mermaid
graph TD
    Phase1[Phase 1: Spin Roll] -->|Reels spinning| Clear[Paylines cleared & idle]
    Phase2[Phase 2: Reels Stopped] -->|SETUP_PAYLINES| SetData[Ingest converted paylines & emit PAYLINE_SET_DATA]
    Phase3[Phase 3: Stage 1 Presentation] -->|PAYLINE_SHOW_ALL| Blink[Blink all winning symbols + draw lines]
    Phase4[Phase 4: Big Win / Cutscene] -->|If Big Win triggered| Pause[Pause payline animations during cutscene]
    Phase5[Phase 5: Idle Cycle] -->|START_PAYLINE_CYCLE| Cycle[Sequential individual line display via SlotPaylineSchedule]
```

---

## 2. Granular Behavior Breakdown

1. **Spin Start**:
   - `SlotTableModule` reclaims symbols and hides previous winning line artifacts.
   - Payline animations remain disabled while reels are in motion.
2. **Reel Stop & Payline Data Conversion**:
   - Once all reel columns reach standstill, Director executes `makeScriptShowPayline` step.
   - `SlotTablePaylineModule` receives `SETUP_PAYLINES`.
   - `SlotTablePaylineData` normalizes server arrays (`normalGamePayLines`, `freeGamePayLines`, `respinGamePayLines`, `rightPayLines`) into visual lines containing target `winSymbols` coordinates.
3. **Stage 1 (Show All Lines)**:
   - `payLineEmitter.emit(PAYLINE_SET_DATA)` informs child modules of the winning data.
   - All hit lines display simultaneously, giving the player instant feedback on total win lines.
4. **Stage 2 (Sequential Cycling)**:
   - `SlotPaylineSchedule` triggers recurring timer ticks every `TIMELINE_CONFIG` seconds.
   - Sequentially isolates Line 1, Line 2, etc., playing specific sound cues and showing payline multipliers.
