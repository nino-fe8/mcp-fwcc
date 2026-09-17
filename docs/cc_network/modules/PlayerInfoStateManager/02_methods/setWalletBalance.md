---
id: "cc_network:PlayerInfoStateManager:methods:setWalletBalance"
title: "PlayerInfoStateManager.setWalletBalance Method Walkthrough"
category: "cc_network"
tags: ["PlayerInfoStateManager", "setWalletBalance", "wallet_sync", "versioning", "concurrency"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `PlayerInfoStateManager.setWalletBalance()`

<!-- convention-summary-start -->
### PlayerInfoStateManager.setWalletBalance Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PlayerInfoStateManager.setWalletBalance Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_methods
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Class**: `PlayerInfoStateManager`
- **Signature**: `setWalletBalance(packet: {data: {version?: number, amount?: number, availableAmount?: number, pVersion?: number, pAmount?: number, pAvaiAmt?: number}}): void`

---

## 1. 🔍 Method Logic & Version-Check Algorithm

```javascript
setWalletBalance(packet) {
    const data = packet.data;
    let isUpdated = false;

    // 1. Process Main Wallet update with version check
    if (!isNaN(data.version) && !isNaN(data.amount) && this.walletInfos.main) {
        if (!this.version || this.version <= data.version) {
            this.walletInfos.main.amount = data.amount || 0;
            this.walletInfos.main.availableAmount = data.availableAmount || 0;
            this.version = data.version;
            isUpdated = true;
        } else {
            logger.debug('my wallet CANNOT update main wallet: current version [%s], new version [%s]', this.version, data.version);
        }
    }

    // 2. Process Promotion Wallet update with version check
    if (!isNaN(data.pVersion) && !isNaN(data.pAmount) && this.walletInfos.promotion) {
        if (!this.version || this.version <= data.pVersion) {
            this.walletInfos.promotion.amount = data.pAmount || 0;
            this.walletInfos.promotion.availableAmount = data.pAvaiAmt || 0;
            this.version = data.pVersion;
            isUpdated = true;
        }
    }

    // 3. Emit notification event if balance changed
    if (isUpdated) {
        this._emitter.emit('wallet-updated', this.walletInfos);
    }
}
```
