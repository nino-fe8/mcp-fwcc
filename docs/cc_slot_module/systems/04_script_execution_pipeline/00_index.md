---
id: "cc_slot_module:systems:script_pipeline:index"
title: "Script Execution Pipeline Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "script_executor", "writer_module", "index", "flow", "module_linkage"]
---

# 📜 Script Execution Pipeline Architecture Index

<!-- convention-summary-start -->
### Script Execution Pipeline Architecture Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Script Execution Pipeline Architecture Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_script_execution_pipeline
- **Scope & Code Paths**: `./01_scripting_triad_director_writer_executor.md`, `./02_command_synthesis_and_payload_dispatch.md`, `./03_async_promise_chaining_mechanism.md`
- **Related Docs**: [`01_scripting_triad_director_writer_executor.md`](./01_scripting_triad_director_writer_executor.md), [`02_command_synthesis_and_payload_dispatch.md`](./02_command_synthesis_and_payload_dispatch.md), [`03_async_promise_chaining_mechanism.md`](./03_async_promise_chaining_mechanism.md)
<!-- convention-summary-end -->


Welcome to the technical guide on the **Script Execution & Command Pipeline** in `cc-slot-module`.

---

## 🧭 Topic Breakdown & Navigation

1. **[`01_scripting_triad_director_writer_executor.md`](./01_scripting_triad_director_writer_executor.md)**
   * The 3-Tier Scripting Triad: `Director` (Scene & Visual Owner) ➔ `Writer` (Script Planner) ➔ `ScriptExecutor` (Queue Runner).
   * Decoupling business logic from rendering code.

2. **[`02_command_synthesis_and_payload_dispatch.md`](./02_command_synthesis_and_payload_dispatch.md)**
   * Structured command array format: string actions `["_command"]` vs. parametrized objects `[{ command: "_step", data: payload }]`.
   * Dynamic script synthesis based on game state.

3. **[`03_async_promise_chaining_mechanism.md`](./03_async_promise_chaining_mechanism.md)**
   * Sequential asynchronous Promise chaining in `ScriptExecutor.executeNextScript()`.
   * Non-blocking queue management and race-condition prevention.

4. **[`04_turbo_mode_and_skip_all_effects.md`](./04_turbo_mode_and_skip_all_effects.md)**
   * Fast Stop and Turbo mode mechanics: how `skipAllEffects()` aborts active tweens, accelerates delays, and resolves Promises immediately.

5. **[`05_diagnostic_logging_and_devtools.md`](./05_diagnostic_logging_and_devtools.md)**
   * Diagnostic Logging with `eno.Logger`, CSS-styled console badges (`[Action]`, `[Running]`, `[Skipping]`, `[Finish]`), and collapsible `console.group` execution tracing.
