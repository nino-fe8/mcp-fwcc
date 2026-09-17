---
id: "cc_network:EventManager:overview"
title: "EventManager Module Architecture & Event Bus"
category: "cc_network"
tags: ["EventManager", "events", "bus", "deduplication", "waitForEvent"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🔔 `EventManager` Module Architecture & Event Bus

<!-- convention-summary-start -->
### EventManager Module Architecture & Event Bus Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for EventManager Module Architecture & Event Bus.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, EventManager
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/game-network.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: Compiled in [`assets/cc-common/cc-network/game-network.js`](../../../../../../assets/cc-common/cc-network/game-network.js)
- **Role**: Inbound network event router, duplicate packet suppressor, and asynchronous response waiter.

---

## 1. 🏛️ Architecture & Role Specification

`EventManager` processes all incoming packets from WebSocket channels and routes them to client listeners:
1. **Sliding-Window Deduplication**: Uses `_duplicateEventId` (ring buffer / hash map holding up to 1,000 recent `eventId` items) to detect and silently drop duplicate server push packets.
2. **Short-code Event Mapping**: Automatically remaps shortened wire routes (`jgr`, `sud`, `spu`, `erp`, `mep`) to human-readable event names (`client-join-game-result`, `state-updated`, etc.).
3. **Promise-based Event Waiter (`waitForEvent`)**: Enables async/await patterns for waiting on specific incoming response packets with configurable timeout guards.
