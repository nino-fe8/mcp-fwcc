---
id: "cc_slot_module:BaseDataModule:methods:index"
title: "BaseDataModule Methods Index"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "methods", "index"]
---

# 📋 BaseDataModule Methods Index

<!-- convention-summary-start -->
### BaseDataModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoad.md`, `./onloadExtend.md`, `./start.md`
- **Related Docs**: [`onLoad(): void`](./onLoad.md), [`onloadExtend(): void`](./onloadExtend.md), [`start(): void`](./start.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Catalog

| Member Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoad(): void`](./onLoad.md)** | `public` | Binds sibling `SlotBaseModule`, inherits `gameMode`, resolves IoC dependencies, and calls `onloadExtend()`. |
| **[`onloadExtend(): void`](./onloadExtend.md)** | `public` | Virtual extension hook for subclass initialization. |
| **[`start(): void`](./start.md)** | `public` | Registers this instance to `GameDataStore.registerModule(this)`. |
| **[`onDataUpdate(key: string, value: any): void`](./onDataUpdate.md)** | `public` | Ingests updated state slice and assigns `this[key] = value`. Subclasses override for sanitization. |
| **[`clearDataWithKey(key: string): void`](./clearDataWithKey.md)** | `public` | Resets a specific registered key to `null`. |
| **[`clearData(): void`](./clearData.md)** | `public` | Resets all `registeredKeys` properties to `null`. |
| **[`getData(key: string): any`](./getData.md)** | `public` | Retrieves the stored value for a given key. |
| **[`isFreeMode(): boolean`](./isFreeMode.md)** | `public` | Checks if `this.gameMode` corresponds to any Free Game variant. |
