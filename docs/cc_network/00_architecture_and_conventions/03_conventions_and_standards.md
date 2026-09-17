---
id: "cc_network:architecture:conventions_and_standards"
title: "Network Protocol Conventions, Error Codes & Packet Standards"
category: "cc_network"
tags: ["cc_network", "conventions", "standards", "error_codes", "packets", "payload"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📜 Network Protocol Conventions, Error Codes & Packet Standards

<!-- convention-summary-start -->
### Network Protocol Conventions, Error Codes & Packet Standards Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Network Protocol Conventions, Error Codes & Packet Standards.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 00_architecture_and_conventions
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📦 Standard Packet Envelope Formats

### 1.1 Outbound Command Payload Structure
```typescript
interface OutboundCommandPayload {
    event: string;              // Action identifier, e.g. "spin", "buy-feature", "collect"
    data: {
        commandId: string;      // Unique UUID generated client-side for deduplication
        betAmount?: number;     // Total bet value
        payLines?: number;      // Selected paylines
        extraData?: any;        // Game-specific parameters
    };
}
```

### 1.2 Inbound Server Event Envelope
```typescript
interface InboundServerEvent<T = any> {
    sId: string;                // Server session ID
    event: string;              // Target event route name, e.g. "jgr" (Join Game Result), "sud" (State Update)
    data: T;                    // Action-specific payload
    eventId?: string;           // Incremental event ID used by EventManager for deduplication
}
```

---

## 2. 🗺️ Common Event Routing Mapping Table

| Short Code | Standard Event Name | Description |
| :--- | :--- | :--- |
| `jgr` | `client-join-game-result` | Server confirmation and resume data when player enters a slot game. |
| `sud` | `state-updated` | General game state transition payload. |
| `spu` | `state-pushed` | Push notification for game mode or matrix changes. |
| `erp` | `error-pushed` | Server error notification containing error code and message. |
| `mep` | `mismatch-command` | Indicates server received a mismatched or out-of-order `commandId`. |
| `wud` | `wallet-updated` | Real-time wallet balance update broadcast. |

---

## 3. ⚠️ Network Error Codes & Recovery Actions

| Error Code / Event Constant | Meaning | Client Recovery Action |
| :--- | :--- | :--- |
| `COMMAND_FAILED_CONC_OVER_LIMIT` | Number of simultaneous commands exceeded `maxConcurrentCommand`. | Throttle user actions; wait for prior ACKs before allowing new spin requests. |
| `COMMAND_FAILED_DUPLICATE` | Command with same action type was triggered while previous one is still executing. | Discard duplicate click; suppress rapid button spamming. |
| `COMMAND_FAILED_RETRY` | Maximum retry threshold reached without receiving server ACK. | Display network disconnection dialog (`DialogMessage`); prompt player to check connection or reload. |
| `CAN_NOT_CONNECT_EVENT` | WebSocket failed to establish connection after backoff attempts. | Halt gameplay loop, trigger `callbackAuthFailed()`, show reconnect dialog. |
| `EXPECTED_EVENT_TIMEOUT` | Asynchronous `waitForEvent()` did not receive expected packet within timeout window. | Execute timeout fallback logic, reject pending promise, restore button interactability. |
