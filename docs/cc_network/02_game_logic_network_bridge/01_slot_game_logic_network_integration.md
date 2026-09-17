---
id: "cc_network:logic_bridge:slot_game_logic_network_integration"
title: "SlotGameLogic Network Integration & Event Dispatcher"
category: "cc_network"
tags: ["logic_bridge", "SlotGameLogic", "initNetwork", "logger", "network_events", "cc_core_lib"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🧠 `SlotGameLogic` Network Integration & Event Dispatcher

<!-- convention-summary-start -->
### SlotGameLogic Network Integration & Event Dispatcher Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotGameLogic Network Integration & Event Dispatcher.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_game_logic_network_bridge
- **Scope & Code Paths**: `../../../../../assets/cc-common/cc-core-lib/slot-base-logic/slotlib.d.ts#L3110-L3160`, `../../../../../assets/cc-common/cc-slot-module/Core/GameInit.ts#L139-L155`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Framework Package**: `assets/cc-common/cc-core-lib/slot-base-logic/`
- **Class Reference**: `SlotGameLogic` ([`slotlib.d.ts`](../../../../../assets/cc-common/cc-core-lib/slot-base-logic/slotlib.d.ts#L3110-L3160))

---

## 1. 🏛️ Architecture & Role Specification

`SlotGameLogic` acts as the central brain connecting raw network packets to the high-level game presentation engine:
1. **Network Binding (`initNetwork`)**: Binds the global network instance, initializes event channels, and attaches network loggers.
2. **Event Parsing & Translation**: Converts incoming socket events into standardized `SlotEvent` and `GameLogicUIEvents` triggers dispatched across UI, table, audio, and win effect modules.
3. **DataStore Synchronization**: Unpacks `playSession` data and synchronizes state fields (`matrix`, `paylines`, `totalWin`, `multiplier`, `betSize`) within `GameDataStore`.

---

## 2. ⚡ Complete Network Setup in Game Bootstrap

In [`GameInit.ts`](../../../../../assets/cc-common/cc-slot-module/Core/GameInit.ts#L139-L155):
```typescript
connect(): void {
    connectNetwork.setGameNetwork(network);
    connectNetwork.loginScene({
        callback: this.setUpGame.bind(this),
        gameId: this._gameConfig.GAME_ID,
        callbackAuthFailed: this.loginFailed.bind(this)
    });
}

setUpGame(): void {
    log("login success");
    this._gameLogic.initNetwork(network);
    this._gameLogic.updateNetworkLogger({ log, warn, error });
    if (this.isConsoleTest) {
        this._gameLogic.switchToConsoleTest();
    }
}
```
