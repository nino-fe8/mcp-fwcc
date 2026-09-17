---
id: "cc_slot_module:SlotSymbolResourceManager:game_flow:asset_resolution_and_fallback_pipeline"
title: "SlotSymbolResourceManager Asset Resolution & Fallback Pipeline"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "game_flow", "asset_pipeline", "fallback"]
---

# 🔄 SlotSymbolResourceManager Asset Resolution & Fallback Pipeline

<!-- convention-summary-start -->
### SlotSymbolResourceManager Asset Resolution & Fallback Pipeline Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotSymbolResourceManager Asset Resolution & Fallback Pipeline.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Asset Resolution Pipeline

When `SlotSymbolModule` requests assets for a symbol code (e.g. `"WILD"` or `"K1"`), `SlotSymbolResourceManager` executes the following resolution pipeline:

```mermaid
graph TD
    Request[SlotSymbolModule calls getBlurSymbolFrame/getSymbolFrame] --> CheckBlur{Is Motion Blur Requested?}
    
    CheckBlur -- Yes --> HasBlur{blurFrameAssets[code] exists?}
    HasBlur -- Yes --> ReturnBlur[Return Motion Blur SpriteFrame]
    HasBlur -- No --> FallbackStatic[Fallback: staticFrameAssets[code]]
    
    CheckBlur -- No --> HasStatic{staticFrameAssets[code] exists?}
    HasStatic -- Yes --> ReturnStatic[Return Static SpriteFrame]
    HasStatic -- No --> WarnBlank[Log Warning & Return Undefined]

    FallbackStatic --> ReturnStatic
```

---

## 2. High-Frequency $O(1)$ Dictionary Invariant

* Because thousands of asset lookups occur per spin across all spinning columns and cascading symbols, lookups **must never iterate arrays at runtime**.
* `initAssets()` executes strictly once in `onLoad()` to pre-calculate `Record<string, cc.SpriteFrame>` hash maps, guaranteeing constant-time $O(1)$ memory access.
