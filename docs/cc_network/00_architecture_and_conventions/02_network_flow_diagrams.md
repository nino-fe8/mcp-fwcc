---
id: "cc_network:architecture:flow_diagrams"
title: "Cocos Slot Network Kernel Sequence & Flow Diagrams"
category: "cc_network"
tags: ["cc_network", "diagrams", "sequence", "mermaid", "flow", "auth", "socket"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📊 Cocos Slot Network Kernel Sequence & Flow Diagrams

<!-- convention-summary-start -->
### Cocos Slot Network Kernel Sequence & Flow Diagrams Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Cocos Slot Network Kernel Sequence & Flow Diagrams.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 00_architecture_and_conventions
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This document illustrates the end-to-end operational flows of the `cc-network` communication kernel using sequence and state machine diagrams.

---

## 1. 🔑 Authentication & Token Resolution Flow

```mermaid
sequenceDiagram
    autonumber
    participant UI as Loading Scene / Bootstrap
    participant CN as connectNetworkV3
    participant Bridge as Native App Bridge (__Game_Bridge / vjsb)
    participant Storage as cc.sys.localStorage
    participant GN as globalNetworkV3
    participant MM as MessageManager

    UI->>CN: loginScene({callback, gameId, callbackAuthFailed})
    CN->>CN: getToken()

    alt TOKEN in Environment Config
        CN->>CN: Return static TOKEN
    else LOGIN_IFRAME is true
        alt URL has &token=
            CN->>CN: Extract token from URL
        else trialMode=true & token absent
            CN->>CN: Generate synthetic token "tr-" + uuid()
            CN->>CN: Inject token into URL (addUrlParam)
        end
        CN->>Storage: Persist token to localStorage[USER_TOKEN]
    else Native Bridge present
        CN->>Bridge: Query __Game_Bridge.getUSS()
    else Fallback
        CN->>Storage: Read localStorage[USER_TOKEN]
    end

    alt Token Found
        CN->>GN: init(token, envId, gameIdSocket)
        GN->>MM: initSocket({socketUrl, token, apiUrl, device, ...})
        CN->>UI: Trigger success callback()
    else Token Missing
        CN->>UI: Trigger callbackAuthFailed()
    end
```

---

## 2. ⚡ Socket Connection & Token Verification Handshake

```mermaid
sequenceDiagram
    autonumber
    participant GN as globalNetworkV3
    participant MM as MessageManager
    participant SM as SocketManager (Socket.io)
    participant Server as Backend Slot Server

    GN->>MM: initSocket({socketUrl, token, apiUrl, ...})
    MM->>SM: Connect to socketUrl with query params (&token, &games, &env)
    SM->>Server: WebSocket Handshake Request (HTTP Upgrade)
    Server-->>SM: WebSocket Handshake Accepted (HTTP 101 Switching Protocols)
    SM-->>MM: onConnect Event

    MM->>Server: Emit "auth/token/login" {token, device, svt, games}
    alt Auth Successful
        Server-->>MM: Auth Response {success: true, userInfo, wallets, ssid}
        MM->>MM: Store session ID (sId), update PlayerInfoStateManager
        MM-->>GN: Broadcast CONNECTED_EVENT
    else Auth Failed
        Server-->>MM: Auth Response {success: false, error}
        MM-->>GN: Broadcast CAN_NOT_AUTHENTICATE / CAN_NOT_CONNECT_EVENT
        MM->>SM: Close & clean up socket connection
    end
```

---

## 3. 🎯 Outbound Command Dispatch & ACK Processing

```mermaid
sequenceDiagram
    autonumber
    participant Mod as Slot Feature (Spin/Bet)
    participant CM as CommandManager
    participant MM as MessageManager
    participant EM as EventManager
    participant Server as Backend Slot Server

    Mod->>CM: executeCommand(payload, options)
    CM->>CM: Check concurrent limits (executingCommandType.count() < maxConcurrentCommand)
    CM->>CM: Generate unique commandId (UUID)
    CM->>CM: Attach commandId to payload

    CM->>MM: sendMessage(serviceId, payload)
    MM->>Server: Send WebSocket frame {serviceId, event, data, commandId}
    CM->>CM: Store in pending ACK map (_messageIdInfosMap)

    alt Server Responds with ACK
        Server-->>MM: Incoming ACK packet {messageId, commandId, status: "OK"}
        MM->>CM: onAck(messageId)
        CM->>CM: Remove from pending ACK map & free concurrency slot
        Server-->>EM: Game Result Event (e.g. "spin-result", "free-spin-result")
        EM->>Mod: Trigger registered event handler with spin data
    else Timeout / Packet Dropped
        CM->>CM: resendCount exceeded limit?
        alt Can Retry
            CM->>CM: Increment numberResend, calculate backoff
            CM->>MM: Resend message packet
        else Max Retries Exceeded
            CM->>Mod: Emit COMMAND_FAILED_RETRY
        end
    end
```

---

## 4. 💰 Multi-Wallet Synchronization Flow

```mermaid
sequenceDiagram
    autonumber
    participant Server as Backend Slot Server
    participant EM as EventManager
    participant PSM as PlayerInfoStateManager
    participant UI as Paybar / Header UI

    Server-->>EM: Broadcast "wallet-updated" {main: {amount, version}, promotion: {amount, version}}
    EM->>PSM: Update event received

    PSM->>PSM: Compare incoming version vs current version
    alt incoming version >= current version
        PSM->>PSM: Update walletInfos["main"].amount = amount
        PSM->>PSM: Update current version = incoming version
        PSM->>UI: Emit "wallet-updated" event
        UI->>UI: Refresh wallet display label on screen
    else incoming version < current version (Stale Packet)
        PSM->>PSM: Discard update to prevent overwriting newer balance
    end
```
