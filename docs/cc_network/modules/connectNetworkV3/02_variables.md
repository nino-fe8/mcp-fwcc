---
id: "cc_network:connectNetworkV3:variables"
title: "connectNetworkV3 Variables & Fields Dictionary"
category: "cc_network"
tags: ["connectNetworkV3", "variables", "constants", "config"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📋 `connectNetworkV3` Variables & Fields Dictionary

<!-- convention-summary-start -->
### connectNetworkV3 Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for connectNetworkV3 Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, connectNetworkV3
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Module-Level Constants & State Variables

| Variable | Type | Scope | Description |
| :--- | :--- | :--- | :--- |
| `vjsb` | `any` | Global / Window | Native JSB bridge object providing C++ / Java / Objective-C message passing (`js2cMessage` / `c2jsMessage`). |
| `tokenClient` | `string` | Module Local | Cache holding auth token received asynchronously from native app bridge callbacks. |
| `bridgeAppClient` | `CC_CMD` | Module Local | Active command handler instance used to communicate with native app bridge. |
| `URL_TOKEN` | `string` | Config Constant | Configuration key (defaults to `"token"`) for extracting auth token from URL parameters. |
| `USER_TOKEN` | `string` | Storage Key | Key used to store and retrieve active auth token from `cc.sys.localStorage`. |
| `TRIAL_PARAM` | `string` | Constant | URL query parameter key (`"trialMode"`) used to detect guest/trial gameplay sessions. |
| `URL_REFRESH_TOKEN` | `string` | Config Constant | URL parameter name for extracting token refresh credentials (defaults to `"refresh-token"`). |
| `USER_REFRESH_TOKEN` | `string` | Storage Key | Local storage key for persisting refresh token (defaults to `"user-refresh-token"`). |
