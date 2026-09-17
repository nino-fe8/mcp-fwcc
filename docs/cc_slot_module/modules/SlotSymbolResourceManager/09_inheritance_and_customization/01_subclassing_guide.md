---
id: "cc_slot_module:SlotSymbolResourceManager:customization:subclassing_guide"
title: "SlotSymbolResourceManager Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotSymbolResourceManager Subclassing & Customization Guide

<!-- convention-summary-start -->
### SlotSymbolResourceManager Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Principles & Guidelines

* 🟢 **Override `getBlurSymbolFrame`**: To customize blur algorithm or return static frame if motion blur assets are omitted.
* 🟢 **Subclass for Remote Asset Bundles**: Implement asynchronous asset preloading for live-ops game skins.
* 🛑 **Preserve `initAssets()`**: Ensure dictionary conversion occurs in `onLoad()`.
