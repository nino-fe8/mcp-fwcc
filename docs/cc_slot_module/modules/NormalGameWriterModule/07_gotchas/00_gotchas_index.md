---
id: "cc_slot_module:NormalGameWriterModule:gotchas:index"
title: "NormalGameWriterModule Gotchas Index"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ NormalGameWriterModule Gotchas Index

<!-- convention-summary-start -->
### NormalGameWriterModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_omitting_resume_wallet_in_final_script.md`
- **Related Docs**: [`01_omitting_resume_wallet_in_final_script`](./01_omitting_resume_wallet_in_final_script.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_omitting_resume_wallet_in_final_script`](./01_omitting_resume_wallet_in_final_script.md)** | Player wallet balance freezes and never updates after spin ends. | Overriding `makeScriptShowResultFinal` without including `_resumeWallet`. | 🔴 Critical (Balance Desync) |
