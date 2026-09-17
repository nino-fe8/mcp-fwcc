---
id: "cc_network:mock_transport:offline_mock_transport_architecture"
title: "Offline Mock Transport Architecture & Local Server Simulation"
category: "cc_network"
tags: ["mock_transport", "MockNetwork9666", "OfflineMockTransport", "offline_dev", "cheat_panel", "rng_mock"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🧪 Offline Mock Transport Architecture & Local Server Simulation

<!-- convention-summary-start -->
### Offline Mock Transport Architecture & Local Server Simulation Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Offline Mock Transport Architecture & Local Server Simulation.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 03_mock_and_testing_transports
- **Scope & Code Paths**: `../../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Mock/MockNetwork9666.ts`, `../../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Core/GameInit9666.ts#L80-L90`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Reference**: [`MockNetwork9666.ts`](../../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Mock/MockNetwork9666.ts)
- **Role**: Emulates full backend slot server responses entirely in client memory, enabling fast local development, UI polishing, and offline QA testing.

---

## 1. 🏛️ Architecture & Role Specification

`MockNetwork9666` wraps `OfflineMockTransport` to intercept all network packets:
1. **Join Game Mocking**: Synthesizes `client-join-game-result` with customized initial balance ($10,000.00), currency (`USD`), and landing matrix.
2. **Local Spin Engine & RNG**: Evaluates payline wins, calculates scatter counts, awards Free Spins, and decrements virtual balance.
3. **Simulated Network Latency**: Injects configurable artificial network delay (e.g. 150ms - 300ms) to accurately mirror real-world WebSocket behavior.

---

## 2. ⚡ Integration in GameInit9666

In [`GameInit9666.ts`](../../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Core/GameInit9666.ts#L80-L90):
```typescript
if (isOfflineMockEnabled) {
    const mockNetwork = new MockNetwork9666();
    connectNetwork.setGameNetwork(mockNetwork);
    this._gameLogic.initNetwork(mockNetwork);
}
```
This decouples client development from backend server availability.
