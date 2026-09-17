---
id: "cc_core_lib:BaseDirector:methods:index"
title: "BaseDirector Methods Master Index"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "methods", "index"]
---

# 📖 `BaseDirector` Methods Master Index

<!-- convention-summary-start -->
### BaseDirector Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDirector Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 03_methods
- **Scope & Code Paths**: `./runAction.md`, `./executeNextScript.md`, `./onFinishScript.md`
- **Related Docs**: [`runAction()`](./runAction.md), [`executeNextScript()`](./executeNextScript.md), [`onFinishScript()`](./onFinishScript.md)
<!-- convention-summary-end -->


---

## 1. Declared Method Signatures

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| **[`runAction()`](./runAction.md)** | `actionName: any, data?: any` | `Promise<any>` | Executes runAction operation in `BaseDirector`. |
| **[`executeNextScript()`](./executeNextScript.md)** | `actionName: any` | `void` | Executes executeNextScript operation in `BaseDirector`. |
| **[`onFinishScript()`](./onFinishScript.md)** | `actionName: any` | `void` | Executes onFinishScript operation in `BaseDirector`. |
| **[`onResetAllScripts()`](./onResetAllScripts.md)** | `void` | `void` | Executes onResetAllScripts operation in `BaseDirector`. |
| **[`_exitGameMode()`](./_exitGameMode.md)** | `data?: any` | `Promise<void>` | Executes _exitGameMode operation in `BaseDirector`. |
| **[`_playResumeMode()`](./_playResumeMode.md)** | `data?: any` | `Promise<boolean>` | Executes _playResumeMode operation in `BaseDirector`. |
