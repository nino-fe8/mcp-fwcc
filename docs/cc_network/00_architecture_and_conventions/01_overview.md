---
id: "cc_network:architecture:overview"
title: "Cocos Slot Network Kernel (cc-network) Architecture Overview"
category: "cc_network"
tags: ["cc_network", "architecture", "overview", "socketio", "v3", "token", "bridge"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🌐 Cocos Slot Network Kernel (`cc-network`) Architecture Overview

<!-- convention-summary-start -->
### Cocos Slot Network Kernel (cc-network) Architecture Overview Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Cocos Slot Network Kernel (cc-network) Architecture Overview.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 00_architecture_and_conventions
- **Scope & Code Paths**: `cc-network/v3/connectNetworkV3.js`, `cc-network/v3/globalNetworkV3.js`, `cc-network/game-network.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


> **Package Path**: `assets/cc-common/cc-network/`  
> **Target Framework**: Cocos Creator 2.4.x / Web & Native Mobile  
> **Protocol Version**: Network V3 (JSON-RPC over Socket.io 2.x / WebSocket + REST API Fallback)

---

## 1. 🏛️ Executive Summary

The `cc-network` package is the core communications backbone of ARK Studio's Cocos Creator slot games. It provides reliable, bi-directional, and low-latency networking capabilities between the client game engine and backend game servers.

Key responsibilities include:
1. **Multi-Environment Token Acquisition**: Resolving user authentication tokens seamlessly across standalone web portals, iframe integrations with query parameters (`&token=`, `&ru=`, `&trialMode=`), and native Android/iOS Webview bridges (`vjsb` / `__Game_Bridge`).
2. **Session & Socket Lifecycle Management**: Establishing WebSocket connections via `MessageManager`, executing token verification handshakes (`auth/token/login`), tracking ping/pong heartbeats, and computing average network latencies.
3. **Guaranteed Command Delivery**: Queueing outbound game actions (Spin, Bet, Collect) via `CommandManager` with automatic deduplication, maximum concurrency limits, and retry backoff policies.
4. **Event Routing & Deduplication**: Dispatching incoming server broadcasts and responses to registered listeners through `EventManager`, while actively filtering out duplicate packet IDs.
5. **Multi-Wallet Balance Synchronization**: Managing real-time player balance updates across `main` and `promotion` wallets via `PlayerInfoStateManager` with version checking to prevent race conditions and stale updates.
6. **Diagnostics & Error Tracking**: Seamless integration with Sentry crash monitoring, tagging user sessions with game IDs and network anomalies.

---

## 2. 🧩 High-Level Subsystem Architecture

```
                                  ┌───────────────────────────────┐
                                  │      Cocos Creator Scene      │
                                  │ (SlotBaseModule, GameDirector)│
                                  └───────────────┬───────────────┘
                                                  │
                                                  ▼
                                  ┌───────────────────────────────┐
                                  │       globalNetworkV3         │
                                  │   (Game Engine Bridge Hub)    │
                                  └───────┬───────────────┬───────┘
                                          │               │
                     ┌────────────────────┴───┐       ┌───┴───────────────────┐
                     │    connectNetworkV3    │       │ PlayerInfoStateManager│
                     │ (Token Auth & Bridge)  │       │ (Multi-Wallet State)  │
                     └────────────┬───────────┘       └───┬───────────────────┘
                                  │                       │
                                  ▼                       ▼
                     ┌────────────────────────────────────────────┐
                     │              MessageManager                │
                     │  (Session Management & Socket.io Host)     │
                     └────────────┬───────────────────────────────┘
                                  │
         ┌────────────────────────┴──────────────────────────────┐
         ▼                                                       ▼
┌──────────────────┐                                   ┌──────────────────┐
│  CommandManager  │                                   │   EventManager   │
│ (Outbound Queue, │                                   │ (Inbound Dispatch│
│  ACK & Retries)  │                                   │ & Deduplication) │
└────────┬─────────┘                                   └─────────┬────────┘
         │                                                       │
         └────────────────────────┬──────────────────────────────┘
                                  ▼
                     ┌────────────────────────────┐
                     │       game-network.js      │
                     │ (Engine.io / WebSocket /   │
                     │  REST Service / Pusher)    │
                     └────────────┬───────────────┘
                                  │
                                  ▼
                     ┌────────────────────────────┐
                     │    Backend Slot Server     │
                     └────────────────────────────┘
```

---

## 3. 📦 Core Modules Breakdown

| Module | Location | Primary Responsibility |
| :--- | :--- | :--- |
| **`connectNetworkV3`** | `cc-network/v3/connectNetworkV3.js` | Resolves authentication tokens from URL params, Native JSB bridges, or synthetic trial mode IDs; orchestrates the pre-game login sequence. |
| **`globalNetworkV3`** | `cc-network/v3/globalNetworkV3.js` | Global singleton interfacing with Cocos engine; initializes socket parameters with device metadata and registers game state managers (`gameStateSlot`). |
| **`MessageManager`** | `cc-network/game-network.js` | Singleton coordinator that holds the active Socket connection, executes authentication handshakes, and routes packets. |
| **`CommandManager`** | `cc-network/game-network.js` | Dispatches outbound gameplay actions with concurrency caps (`maxConcurrentCommand`), unique `commandId` generation, and retry backoff. |
| **`EventManager`** | `cc-network/game-network.js` | Event bus for handling inbound server responses; features sliding window event deduplication and asynchronous event waiters with timeouts. |
| **`PlayerInfoStateManager`** | `cc-network/game-network.js` | Tracks player credentials, currency, user mode (Real vs Anonymous/Trial), and versioned balance sync for `main` and `promotion` wallets. |
| **`ServiceRest`** | `cc-network/game-network.js` | RESTful HTTP request client supporting GET/POST operations with error callbacks and retry capabilities. |
| **`authenPusher`** | `cc-network/authenPusher.js` | Pusher WebSocket fallback channel for alternative notification transport. |

---

## 4. 🚀 Execution Flow Lifecycle

1. **Bootstrap & Token Extraction**:
   - During scene startup, `connectNetwork.loginScene()` is invoked.
   - `getToken()` determines the authentication source:
     - `TOKEN` environment override if configured.
     - `LOGIN_IFRAME` mode: checks `getUrlParam('token')`. If absent and `trialMode=true`, generates a synthetic token `tr-${uuid()}`.
     - Native App Bridge: checks `window['__Game_Bridge'].getUSS()` or `vjsb`.
     - Fallback: reads `USER_TOKEN` from `cc.sys.localStorage`.
2. **Socket Initialization & Handshake**:
   - `globalNetwork.init(token, envId, gameIdSocket)` extracts device parameters (`os`, `platform`, `browser`, `language`).
   - `MessageManager.initSocket()` connects to `SOCKET_URL`, sending token authentication payload to `auth/token/login`.
3. **Gameplay Command Execution**:
   - Slot game components dispatch spin/bet actions via `CommandManager.executeCommand()`.
   - Outbound commands are tagged with a unique UUID, placed into the pending acknowledgment queue, and sent through WebSocket.
4. **Response & Balance Updates**:
   - Server returns response packets and wallet updates (`wallet-updated` / `wud-pAmt`).
   - `EventManager` delivers data to game handlers, while `PlayerInfoStateManager` updates balance after verifying packet sequence versions.
