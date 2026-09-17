---
id: "cc_network:globalNetworkV3:methods:registerGame"
title: "globalNetworkV3.registerGame Method Walkthrough"
category: "cc_network"
tags: ["globalNetworkV3", "registerGame", "gameStateSlot", "sentryScope"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `globalNetworkV3.registerGame()`

<!-- convention-summary-start -->
### globalNetworkV3.registerGame Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for globalNetworkV3.registerGame Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_methods
- **Scope & Code Paths**: `../../../../../../../assets/cc-common/cc-network/v3/globalNetworkV3.js#L44-L62`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Module**: `globalNetworkV3` ([`globalNetworkV3.js`](../../../../../../../assets/cc-common/cc-network/v3/globalNetworkV3.js#L44-L62))
- **Signature**: `registerGame(gameData: {gameId: string, isSlotGame: boolean}): any`

---

## 1. 🔍 Method Source Code

```javascript
this.registerGame = (gameData) => {
    const { gameId, isSlotGame } = gameData;
    let gameState;
    if (typeof Sentry !== 'undefined') {
        Sentry.configureScope(function(scope) {
            scope.setExtra("gameId", gameId);
        });
    }
    if (isSlotGame) {
        gameState = require('gameStateSlot');
    } else {
        gameState = require('gameState' + gameId);
    }
    if (!gameState) return;

    return new gameState({gameData});
};
```

---

## 2. ⚡ Key Operations

1. **Sentry Context Enrichment**: Updates Sentry error scope with `"gameId": gameId`.
2. **Dynamic Game State Class Loading**:
   - For slot titles (`isSlotGame === true`), loads standard `gameStateSlot`.
   - For non-standard mini-games, loads `gameState[GameId]` dynamically.
3. **Instance Creation**: Returns the new game state instance bound to `gameData`.
