---
id: "convention:summary_specification_standard"
title: "Documentation Convention: Semantic Summary Specification Standard"
category: "conventions"
tags: ["convention", "summary_standard", "agentic_rag", "semantic_context", "docs_indexing"]
created_at: "2026-08-28"
author: "ARK Slot Engineering & AI Architecture Team"
---

# 📜 Documentation Convention: Semantic Summary Specification Standard

To maximize the reasoning capabilities and retrieval precision of AI Agents (Agentic RAG) while minimizing token noise, **every markdown documentation file** within `mcp-fwcc` must include a standardized, machine-parsable **Semantic Summary Block** located immediately below the primary `# Title` header.

---

## 1. 🏗️ Standard File Header Structure

Every documentation file must adhere strictly to the following layout:

```markdown
---
id: "<unique-topic-id>"
title: "<Human Readable Document Title>"
category: "<category-name>"
tags:
  - <tag-1>
  - <tag-2>
scopePaths:
  - <workspace-relative-path-to-source-code-1>
  - <workspace-relative-path-to-source-code-2>
related:
  - <related-doc-id-or-topic-1>
  - <related-doc-id-or-topic-2>
created_at: "YYYY-MM-DD"
author: "ARK Slot Engineering Team"
---

# <Icon> <Human Readable Document Title>

<!-- convention-summary-start -->
### <Topic Title> Summary

- **Core Architecture / Purpose**: <1-2 sentences clearly describing the purpose, mission, or design goal of this document.>
- **Key Mechanisms & Design**: <Dense summary of key technical mechanisms, state machines, algorithmic steps, bug fixes, or override logic.>
- **Domain Capabilities**: <Comma-separated list of functional domains, e.g. business_discrepancy, ui_controls, reel_engine.>
- **Scope & Code Paths**: `<path/to/code_1.ts>`, `<path/to/code_2.ts>`
- **Related Docs**: [<Doc Name 1>](./relative/path/1.md), [<Doc Name 2>](./relative/path/2.md)
<!-- convention-summary-end -->

---

## 1. ... (Main Document Body)
```

---

## 2. 📋 The 5 Mandatory Summary Attributes

| Field Name | Format | Content & Constraints |
| :--- | :--- | :--- |
| **`Core Architecture / Purpose`** | Sentence | Explains **WHY** this document exists and what business/technical problem it solves. |
| **`Key Mechanisms & Design`** | Dense paragraph | Captures the technical core: state transitions, exact method hooks, parameters, calculations, and runtime constraints. |
| **`Domain Capabilities`** | Tag list | Standardized taxonomy (e.g., `networking`, `fsm`, `touch_gestures`, `free_game_cascade`, `wallet_sync`). |
| **`Scope & Code Paths`** | Markdown code spans | Exact workspace-relative paths to the source code files (`assets/...`, `mcp/...`). |
| **`Related Docs`** | Markdown links | Relative links to upstream, downstream, or sibling documentation files. |

---

## 3. 🎯 Concrete Examples Across Categories

### 3.1 Example for Business Discrepancy Items (`03_business_discrepancies/items/`)
```markdown
# 📌 Item #11: Exit Button Always Visible and Disabled When &ru Is Absent

<!-- convention-summary-start -->
### Exit Button &ru Parameter Handling Summary

- **Core Architecture / Purpose**: Standardizes Exit button visibility and interaction in Setting Menu when URL parameter `&ru` (Return URL) is missing.
- **Key Mechanisms & Design**: Keeps Exit button node permanently active (`active = true`); dynamically sets `button.interactable = false` if `&ru` is absent; guards `trigger()` method to prevent execution without valid return URL.
- **Domain Capabilities**: business_discrepancy, ui_controls, exit_button, url_parameters.
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackToLobbyModule9666.ts`, `assets/cc-common/cc-slot-module/GUI/Menu/BackToLobbyModule.ts`
- **Related Docs**: [BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md](../01_bugs_and_gotchas/BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md), [ITEM_010_exit_confirmation_popup_behavior.md](./ITEM_010_exit_confirmation_popup_behavior.md)
<!-- convention-summary-end -->
```

### 3.2 Example for Game Flow Lifecycle (`cc_network/01_game_flow_and_lifecycle/`)
```markdown
# 🔄 Game Flow 02: Join Game & Play Session State Resume Flow

<!-- convention-summary-start -->
### Join Game & State Resume Flow Summary

- **Core Architecture / Purpose**: Details the room entry sequence and full state rehydration pipeline for ongoing/interrupted slot play sessions (`dataResume` / `playSession`).
- **Key Mechanisms & Design**: Dispatches `client-join-game-request` (`jg`), parses `client-join-game-result` (`jgr`), rehydrates matrix symbols, calculates historical pre-spin win `displayWin = totalAfterSpin - paylineWinAmount` to prevent duplicate visual tallying, and transitions directly into Free Game if `freeGameRemaining > 0`.
- **Domain Capabilities**: game_flow, network_kernel, state_resume, dataResume, payline_tally.
- **Scope & Code Paths**: `assets/cc-common/cc-core-lib/slot-base-logic/`, `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts`
- **Related Docs**: [01_bootstrap_and_login_flow.md](./01_bootstrap_and_login_flow.md), [03_spin_cycle_packet_pipeline.md](./03_spin_cycle_packet_pipeline.md)
<!-- convention-summary-end -->
```

### 3.3 Example for Bug Gotchas (`transfer-ark/01_bugs_and_gotchas/`)
```markdown
# 🐛 BUG_009: Bypass Total Win Popup When Free Game Total Win is Zero

<!-- convention-summary-start -->
### Zero Win Free Game Popup Bypass Summary

- **Core Architecture / Purpose**: Resolves inappropriate celebration popup presentation when Free Game concludes with total accumulated win of $0.00.
- **Key Mechanisms & Design**: Checks `totalFreeSpinWinAmount` before triggering `TotalWinModule`; if `totalWin <= 0`, bypasses modal popup and directly emits `FREE_GAME_MODE_COMPLETED`.
- **Domain Capabilities**: bugs_and_gotchas, celebration_modals, free_game, total_win.
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/TotalWinModule9666.ts`
- **Related Docs**: [ITEM_070_total_win_summary_popup_and_countup_rules.md](../03_business_discrepancies/items/ITEM_070_total_win_summary_popup_and_countup_rules.md)
<!-- convention-summary-end -->
```

---

## 4. ⚙️ MCP Search Engine Integration Rule

The `DocsSearchEngine` (`mcp/mcp-fwcc/src/engines/docs_search_engine.ts`) must:
1. Scan for the regex pattern:
   ```typescript
   const summaryMatch = content.match(/<!--\s*convention-summary-start\s*-->([\s\S]*?)<!--\s*convention-summary-end\s*-->/);
   ```
2. Store the extracted clean text in `DocChunk.summary`.
3. In `fwcc_search_docs` and `fwcc_search_topic`, return `summary` directly in the search result object for instant consumption by AI Agents.
