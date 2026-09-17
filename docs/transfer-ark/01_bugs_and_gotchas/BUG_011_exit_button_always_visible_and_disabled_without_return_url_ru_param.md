---
id: "transfer-ark:bugfix:exit_button_always_visible_and_disabled_without_return_url_ru_param"
title: "Exit / Back to Lobby Button Always Visible and Disabled When Return URL (&ru) Is Missing"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BackToLobbyModule", "BackToLobbyModule9666", "MenuPanel", "ExitButtonManager"]
tags: ["back_to_lobby", "exit_button", "return_url", "ru_param", "iframe", "discrepancy_item_11", "g9666"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# BUG-011: Exit / Back to Lobby Button Always Visible and Disabled When Return URL (&ru) Is Missing

<!-- convention-summary-start -->
### Exit / Back to Lobby Button Always Visible and Disabled When Return URL (&ru) Is Missing Summary

- **Core Architecture / Purpose**: Documents root cause, architectural pitfalls, reproduction steps, and official code fix for Exit / Back to Lobby Button Always Visible and Disabled When Return URL (&ru) Is Missing.
- **Key Mechanisms & Design**: Guards edge cases, prevents race conditions/null crashes, and enforces state machine integrity during game transitions.
- **Domain Capabilities**: business_discrepancy, 01_bugs_and_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/BackToLobby/BackToLobbyModule.ts`, `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackToLobbyModule9666.ts`, `BackToLobbyButton.prefab`
- **Related Docs**: [`mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/SPEC_001_cocos_vs_pixijs_refer_discrepancy_matrix.md`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/SPEC_001_cocos_vs_pixijs_refer_discrepancy_matrix.md)
<!-- convention-summary-end -->


---

## 1. 📌 Problem / Feature Overview
- **Business Requirement Reference**: Item #11 in the Standard Discrepancy Matrix (`Compare Cocos vs Pixijs` / `SPEC_001_cocos_vs_pixijs_refer_discrepancy_matrix.md`).
- **Old / Base SDK Behavior**: The Exit / Back to Lobby button was only displayed when the game link contained the URL parameter `&ru`. When `&ru` was absent or when running inside an iframe where `checkConditionCloseGameIframe()` returned `false`, the base `BackToLobbyModule` automatically hid the entire node by setting `this.node.active = false`.
- **Target Requirement ("According to Reference Game")**: The Exit button must **always remain visible** on the game UI (`this.node.active = true`). If the game link does not contain the `&ru` parameter, the Exit button must be **disabled** (`interactable = false`, displaying the disabled sprite) and have **no function** (no click events received, no audio played, no confirmation dialog triggered).

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy

| Criteria | Base SDK Behavior (`cc-common`) | ARK Business Specification / Reference Game |
| :--- | :--- | :--- |
| **Node Visibility without `&ru`** | `this.node.active = false` (Node is hidden completely from layout) | `this.node.active = true` (Always visible on the game UI layout) |
| **Button State (Interactability)** | N/A (because the node is hidden) | `btn.interactable = false` (Switches to visually disabled state) |
| **Click Trigger Handling** | Triggers exit logic if node is somehow active | Blocked completely (`early return`), executing no action |

---

## 3. 🔍 Root Cause Analysis in Base SDK

In `assets/cc-common/cc-slot-module/GUI/BackToLobby/BackToLobbyModule.ts`:
```typescript
onLoadExtend(): void {
    const { LOGIN_IFRAME } = eno.environment.getConfig();
    if (LOGIN_IFRAME) {
        const isEnableBtn = gameCommonUtils && gameCommonUtils.checkConditionCloseGameIframe();
        if (!isEnableBtn) {
            this.node.active = false; // ❌ Hides the node entirely instead of keeping it visible in disabled state
        }
    }
}
```
When subclassing `BackToLobbyModule`, if a game implementation does not override `onLoadExtend()`, the `BackToLobbyButton` node is automatically disabled/hidden when `&ru` is omitted, causing a layout discrepancy against the reference game.

---

## 4. 🛠️ Implementation & Override Solution

Override the lifecycle methods and button state logic in [`BackToLobbyModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackToLobbyModule9666.ts):

```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from '../../../../cc-common/cc-slot-module/Core/GameLogicUIEvents';
import { BackToLobbyModule } from '../../../../cc-common/cc-slot-module/GUI/BackToLobby/BackToLobbyModule';

const { ccclass } = _decorator;
const { gameCommonUtils } = eno;

@ccclass
export class BackToLobbyModule9666 extends BackToLobbyModule {

	onLoadExtend(): void {
		// Always keep button visible in game (do not hide node), update interactability based on &ru param
		this.node.active = true;
		this.updateButtonState();
	}

	start(): void {
		this.updateButtonState();
	}

	public canBackToLobby(): boolean {
		return Boolean(gameCommonUtils?.checkConditionCloseGameIframe?.() || gameCommonUtils?.getUrlParam?.("ru"));
	}

	public updateButtonState(): void {
		const isInteractable = this.canBackToLobby();
		const btn = this.node.getComponent(cc.Button) || this.node.getComponentInChildren(cc.Button);
		if (btn) {
			btn.interactable = isInteractable;
		}
	}

	trigger(): void {
		// If game URL does not contain &ru param, the button must have no function
		if (!this.canBackToLobby()) {
			return;
		}

		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}

		const dialogManager = this.gameLogic.getDialogManager ? this.gameLogic.getDialogManager() : null;
		if (dialogManager) {
			const onConfirm = () => {
				this.gameLogic.emit(GameLogicUIEvents.BACK_TO_LOBBY);

				this._backToLobbyCallback = () => {
					this._backToLobbyCallback = null;
					this.soundPlayer && this.soundPlayer.stopAllAudio();
					gameCommonUtils.handleCloseGameIframe();
				};
				this.scheduleOnce(this._backToLobbyCallback, this.delaySoundClick);
			};

			const onCancel = () => { };

			dialogManager.showDialog(
				"Do you want to exit the game and\nreturn to the home page?",
				onConfirm,
				onCancel
			);
		} else {
			this.gameLogic.emit(GameLogicUIEvents.BACK_TO_LOBBY);
			this._backToLobbyCallback = () => {
				this._backToLobbyCallback = null;
				this.soundPlayer && this.soundPlayer.stopAllAudio();
				gameCommonUtils.handleCloseGameIframe();
			};
			this.scheduleOnce(this._backToLobbyCallback, this.delaySoundClick);
		}
	}
}
```

---

## 5. ⚠️ Gotchas & Edge Cases

1. **Button Component Hierarchy Lookup**:
   In `BackToLobbyButton.prefab`, the `BackToLobbyModule9666` script component is attached to the root node, whereas the `cc.Button` and `cc.Sprite` components reside on the child `Button` node. Always look up the button using `this.node.getComponent(cc.Button) || this.node.getComponentInChildren(cc.Button)`.
2. **Disabled Sprite Configuration**:
   Ensure `cc.Button` has `_N$disabledSprite` assigned (configured with UUID `4e2cfb20-d4ec-49f9-ab6e-be17510759ab` in `BackToLobbyButton.prefab`) so that setting `btn.interactable = false` immediately applies the visually disabled look.
3. **Double Guarding Principle**:
   Always combine UI interactability disablement (`interactable = false`) with an explicit logical guard (`if (!this.canBackToLobby()) return;`) at the beginning of `trigger()` to prevent accidental triggers from script events or programmatic invocations.

---

## 6. ♻️ Reusability Guide for Future Game Titles

1. When creating a new slot game (e.g. `g9777`, `g9888`), create `BackToLobbyModule<GameId> extends BackToLobbyModule`.
2. Override `onLoadExtend()`, `start()`, `canBackToLobby()`, and `trigger()` according to this exact pattern.
3. Test game loading with and without `&ru` in URL parameters to verify that the button remains rendered on screen in disabled state.

---

## 7. 🔗 Codebase References

- Subclass Implementation: [`assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackToLobbyModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/BackToLobbyModule9666.ts)
- Base Framework Class: [`assets/cc-common/cc-slot-module/GUI/BackToLobby/BackToLobbyModule.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-common/cc-slot-module/GUI/BackToLobby/BackToLobbyModule.ts)
- Button Prefab: [`assets/cc-release-slot/cc1-red-cliff/data/prefabs/Gui/BackToLobby/BackToLobbyButton.prefab`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/data/prefabs/Gui/BackToLobby/BackToLobbyButton.prefab)
- Discrepancy Matrix: [`mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/SPEC_001_cocos_vs_pixijs_refer_discrepancy_matrix.md`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/SPEC_001_cocos_vs_pixijs_refer_discrepancy_matrix.md)
