---
id: "cc_network:recipes:network_reconnection_and_resend_strategy"
title: "Network Reconnection Backoff and In-Flight Resend Strategy"
category: "cc_network"
tags: ["recipes", "reconnect", "backoff", "resend", "offline", "mobile"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🛠️ Recipe: Network Reconnection Backoff and In-Flight Resend Strategy

<!-- convention-summary-start -->
### Network Reconnection Backoff and In-Flight Resend Strategy Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Network Reconnection Backoff and In-Flight Resend Strategy.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 04_recipes_and_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📌 Mobile Disconnection Gotchas
On mobile devices (iOS Safari / Android Chrome), network connectivity frequently fluctuates when switching between Wi-Fi and 4G/5G, or when the browser is temporarily minimized to background.

---

## 2. ⚡ Reconnection Matrix & Backoff Policies

1. **Jittered Exponential Backoff**:
   - Initial retry delay: 1,000ms.
   - Randomization factor: 0.5.
   - Max delay cap: 5,000ms.
   - Prevents thundering herd problems when multi-tenant servers recover from network blips.
2. **In-Flight Command Queue Resending**:
   - If the socket drops while a spin packet is awaiting acknowledgment (`_messageIdInfosMap`), `CommandManager` does not immediately abort.
   - Upon `onConnected` event after socket reconnection, `CommandManager` re-sends unacknowledged commands with incremented `numberResend` counters.
   - If server already processed the spin, the idempotent `commandId` prevents double-deduction and server returns cached spin results.
