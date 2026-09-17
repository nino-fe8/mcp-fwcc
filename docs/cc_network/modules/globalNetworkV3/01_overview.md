---
id: "cc_network:globalNetworkV3:overview"
title: "globalNetworkV3 Module Architecture & Engine Network Adapter"
category: "cc_network"
tags: ["globalNetworkV3", "adapter", "sentry", "device_info", "gamestate"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🌐 `globalNetworkV3` Module Architecture & Engine Network Adapter

<!-- convention-summary-start -->
### globalNetworkV3 Module Architecture & Engine Network Adapter Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for globalNetworkV3 Module Architecture & Engine Network Adapter.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, globalNetworkV3
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/v3/globalNetworkV3.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: [`assets/cc-common/cc-network/v3/globalNetworkV3.js`](../../../../../../assets/cc-common/cc-network/v3/globalNetworkV3.js)
- **Role**: Global engine adapter bridging Cocos Creator runtime lifecycle, Sentry error monitoring, device environment metadata, and the underlying `game-network` socket manager.

---

## 1. 🏛️ Architecture & Role Specification

`globalNetworkV3` acts as the singleton gateway between the Cocos Creator engine and the network stack. It performs three critical duties:
1. **Device Fingerprinting & Socket Bootstrap**: Gathers operating system (`cc.sys.os`), platform, browser type, and language to configure the socket connection with rich client diagnostic metadata.
2. **Dynamic Game State Registration**: Instantiates the appropriate game state handler (`gameStateSlot` for standardized slot games or `gameState[GameId]` for specialized games) when joining a session.
3. **Sentry Scope Tagging**: Injects the active `gameId` into global Sentry error reporting scopes so that all runtime crashes and network exceptions are properly tagged by game title.
