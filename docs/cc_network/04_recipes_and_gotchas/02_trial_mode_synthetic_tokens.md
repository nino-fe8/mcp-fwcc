---
id: "cc_network:recipes:trial_mode_synthetic_tokens"
title: "Trial Mode Synthetic Token Generation & URL Synchronization"
category: "cc_network"
tags: ["recipes", "trial_mode", "synthetic_token", "uuid", "iframe"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🛠️ Recipe: Trial Mode Synthetic Token Generation & URL Synchronization

<!-- convention-summary-start -->
### Trial Mode Synthetic Token Generation & URL Synchronization Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Trial Mode Synthetic Token Generation & URL Synchronization.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 04_recipes_and_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📌 Problem & Context
When operating in Demo / Free Play mode (`trialMode=true`), players do not possess an authenticated user token. However, backend slot gateways require a valid token string in the socket handshake to provision temporary demo wallets and track guest session matrices.

---

## 2. ⚡ Solution Architecture

In `connectNetworkV3.getToken()`:
```javascript
const TRIAL_PARAM = 'trialMode';
let trialMode = (getUrlParam(TRIAL_PARAM) === 'true');

if (!token && trialMode) {
    // Generate synthetic guest UUID
    token = `tr-${uuid()}`;
    // Inject token back into the browser URL so refreshes preserve session state
    addUrlParam("token", token);
    cc.sys.localStorage.setItem(USER_TOKEN, token);
}
```

### Key Benefits:
- **Prefix Isolation**: The `tr-` prefix signals to server and `PlayerInfoStateManager` that the session belongs to a guest user (`userType === 'ANONYMOUS'`).
- **State Persistence Across Refreshes**: By calling `addUrlParam("token", token)`, if the player reloads their browser during trial mode, the same demo session is re-established seamlessly.
