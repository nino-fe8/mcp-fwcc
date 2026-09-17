---
id: "transfer-ark:feature:jackpot_win_cutscene:05_implementation_code"
title: "Jackpot Win Cutscene - Complete Implementation Code"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule", "JackpotWinModule9666"]
tags: ["source_code", "typescript", "implementation", "copy_paste_ready"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 5. 💻 Complete Source Code Implementation

<!-- convention-summary-start -->
### Jackpot Win Cutscene - Complete Implementation Code Summary

- **Core Architecture / Purpose**: Full production-verified TypeScript source code for `JackpotWinModule9666` extending `JackpotWinModule`.
- **Key Mechanisms & Design**: Production-ready implementation with Spine event callbacks, audio loop rescheduling, debounced skip, and bone tracking.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/JackpotWinModule9666.ts`
- **Related Docs**: [02. State Machine & Lifecycle](./02_state_machine_and_lifecycle.md), [07. Setup Guide](./07_reusability_and_setup_guide.md)
<!-- convention-summary-end -->

---

## 5.1 Production File: `JackpotWinModule<GameId>.ts`

**Path**: `assets/cc-release-slot/<game_id>/scripts/Cutscene/JackpotWinModule<GameId>.ts`

```typescript
const { _decorator } = cc;
import { GAME_MODE_ENUM, JackpotWinModule } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
import { fadeToMainBGM, stopCurrentMusic, switchMusicWithFade } from '../Utils/MusicUtil9666';

const { ccclass, property } = _decorator;
const { SpineUtils } = eno;

export enum JackpotWinState {
    IDLE = 0,
    COUNTING = 1,
    COUNTING_COMPLETED = 2,
    CLOSING = 3
}

@ccclass("SymbolIconMapping9666")
class SymbolIconMapping9666 {
    @property(cc.String)
    symbolCode: string = "";

    @property(sp.SkeletonData)
    spineSymbol: sp.SkeletonData = null!;
}

const SYMBOL_ICON_SLOT_COUNT = 6;

@ccclass
export class JackpotWinModule9666 extends JackpotWinModule {
    @property(sp.Skeleton)
    jackpotSpine: sp.Skeleton = null;

    @property(sp.Skeleton)
    jackpotCollectSpine: sp.Skeleton = null!;

    @property({ type: [SymbolIconMapping9666] })
    symbolIconMappings: SymbolIconMapping9666[] = [];

    @property
    symbolSlotPrefix: string = "slot_symbol_";

    @property
    animIdle: string = "idle_reel_1";

    @property
    animIdleFallback: string = "idle";

    @property(cc.Vec2)
    iconScale: cc.Vec2 = cc.v2(1, 1);

    @property({ type: [sp.Skeleton] })
    symbolIconSkeletons: sp.Skeleton[] = [];

    @property
    sfxJackpotEndId: string = "JACKPOT_END";

    @property
    sfxCountingId: string = "COUNTING";

    @property
    sfxCountingStopId: string = "COUNTING_STOP";

    @property
    bgmJackpotId: string = "BGM_JACKPOT";

    @property
    bgmFreeGameId: string = "BGM_FREE";

    @property
    bgmResumeFadeTime: number = 1.0;

    @property
    bgmResumeDelay: number = 3.0;

    @property
    boneCoinName: string = "slot_coin";

    @property(cc.Vec2)
    moneyOffset: cc.Vec2 = cc.v2(0, 10);

    @property
    eventNameMoneyCount: string = "money_count";

    @property
    eventNameMoneyOut: string = "money_out";

    private _popupState: JackpotWinState = JackpotWinState.IDLE;
    private _isMoneyHidden: boolean = false;
    private _isMoneySlotMoving: boolean = false;
    private _hasTriggeredMoneyCount: boolean = false;
    private _countingLoopActive: boolean = false;
    private _canClickToClose: boolean = false;
    private _lastClickTime: number = 0;
    private _tweenCounting: cc.Tween = null;
    private _tweenDebounce: cc.Tween = null;
    private _tweenAutoClose: cc.Tween = null;
    private _tweenResumeBgm: cc.Tween = null;

    onEnable(): void {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDisable(): void {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.unschedule(this.skipFromSpace);
    }

    private onKeyUp(event: cc.Event.EventKeyboard): void {
        if (event.keyCode !== cc.macro.KEY.space || !this.canSkipFromSpace()) {
            return;
        }
        this.scheduleOnce(this.skipFromSpace);
    }

    private canSkipFromSpace(): boolean {
        if (!this.enabledInHierarchy || this._popupState === JackpotWinState.IDLE || this._popupState === JackpotWinState.CLOSING) {
            return false;
        }
        if (!this._hasTriggeredMoneyCount) {
            return false;
        }
        if (this._popupState === JackpotWinState.COUNTING_COMPLETED && !this._canClickToClose) {
            return false;
        }
        const ui = (this.gameLogic?.getDataModel() as any)?.UIManagerData;
        if (ui) {
            return !(ui.isDialogMessageOpen || ui.isTrialDialogOpen || ui.isInfoOpen
                || ui.isSettingsOpen || ui.isBetSelectionPanelOpen || ui.isMenuPanelOpen
                || ui.isAutoSpinPanelOpen || ui.isPayTablePanelOpen || ui.isBuyFeaturePanelOpen);
        }
        return true;
    }

    private skipFromSpace(): void {
        if (this.canSkipFromSpace()) {
            this.onClick();
        }
    }

    onLoadExtend(): void {
        super.onLoadExtend();
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        if (!this._lbWinAmount && this.winAmount) {
            this._lbWinAmount = this.winAmount.getComponent(cc.Label);
        }
        if (this.jackpotSpine && this.jackpotSpine.skeletonData) {
            this.jackpotSpine.setMix('in', 'loop', 0.2);
            this.jackpotSpine.setMix('loop', 'out', 0.2);
            this.jackpotSpine.setMix('in', 'out', 0.2);
        }
    }

    private startCountingLoopSfx(): void {
        if (!this.soundPlayer) return;
        this._countingLoopActive = true;
        this.soundPlayer.stopSfx(this.sfxCountingId);
        this.soundPlayer.playSfx(this.sfxCountingId, false);
        this.unschedule(this.retriggerCountingSfx);
        this.schedule(this.retriggerCountingSfx, 1.5);
    }

    private retriggerCountingSfx(): void {
        if (!this._countingLoopActive || !this.soundPlayer) {
            this.unschedule(this.retriggerCountingSfx);
            return;
        }
        this.soundPlayer.playSfx(this.sfxCountingId, false);
    }

    private stopCountingLoopSfx(): void {
        this._countingLoopActive = false;
        this.unschedule(this.retriggerCountingSfx);
        if (this.soundPlayer) {
            this.soundPlayer.stopSfx(this.sfxCountingId);
        }
    }

    update(_dt: number): void {
        if (this._isMoneySlotMoving) {
            this.syncMoneyToSlot();
        }
        if (this.jackpotCollectSpine && this.jackpotCollectSpine.node.active) {
            this.syncSymbolIconsToSlots();
        }
    }

    syncMoneyToSlot(): void {
        if (!this.jackpotSpine || !this.jackpotSpine.skeletonData || !this.winAmount || !this.winAmount.parent) {
            return;
        }
        if (this._isMoneyHidden) {
            this.winAmount.active = false;
            return;
        }
        this.jackpotSpine.updateWorldTransform();
        const bone = this.jackpotSpine.findBone(this.boneCoinName);
        if (!bone) return;

        this.winAmount.active = !!bone.active;
        const offsetX = this.moneyOffset ? this.moneyOffset.x : 0;
        const offsetY = this.moneyOffset ? this.moneyOffset.y : 10;
        const worldPos = this.jackpotSpine.node.convertToWorldSpaceAR(cc.v2(bone.worldX + offsetX, bone.worldY + offsetY));
        this.winAmount.setPosition(this.winAmount.parent.convertToNodeSpaceAR(worldPos));
    }

    private formatDisplayWinAmount(amount: number): string {
        if (!this.moneyFormatter) return String(amount);
        const config = (this.moneyFormatter as any)?.config?.MONEY_FORMAT;
        if (config && config.CENT_UNIT != null) {
            const savedCentUnit = config.CENT_UNIT;
            delete config.CENT_UNIT;
            const res = this.moneyFormatter.formatMoney(amount);
            config.CENT_UNIT = savedCentUnit;
            return res;
        }
        return this.moneyFormatter.formatMoney(amount);
    }

    initValue(): void {
        super.initValue();
        this._popupState = JackpotWinState.IDLE;
        this._canClickToClose = false;
        this._lastClickTime = 0;
        this._isMoneyHidden = false;
        this.cleanupTweens();
        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.formatDisplayWinAmount(0);
        }
    }

    async enter(): Promise<void> {
        this.playSoundStart();
        this.initValue();
        this.stopParticle();
        this._hasTriggeredMoneyCount = false;
        if (this.winAmount) {
            this.winAmount.active = false;
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.formatDisplayWinAmount(0);
        }
        if (this.jackpotSpine) {
            this.jackpotSpine.node.active = false;
        }
        await this.playCollectAnim();
        this.playSkeletonAnim();
    }

    private playCollectAnim(): Promise<void> {
        return new Promise<void>((resolve) => {
            if (!this.jackpotCollectSpine || !this.jackpotCollectSpine.skeletonData) {
                resolve();
                return;
            }
            const symbolCodes = this.getCollectSymbolCodes();
            const animName = `idle_symbol_${symbolCodes.length}`;
            this.jackpotCollectSpine.node.active = true;
            this.jackpotCollectSpine.setAnimation(0, animName, false);
            this.jackpotCollectSpine.updateWorldTransform();
            this.updateSymbolIcons(symbolCodes);
            this.jackpotCollectSpine.setCompleteListener((trackEntry: any) => {
                if (trackEntry && trackEntry.animation && trackEntry.animation.name === animName) {
                    this.jackpotCollectSpine.setCompleteListener(() => { });
                    resolve();
                }
            });
        });
    }

    private getCollectSymbolCodes(): string[] {
        const raw: string[] = Array.isArray(this.content?.collectSymbols) ? this.content.collectSymbols : [];
        if (raw.length === 0) return ["", "", ""];
        return raw.slice(0, SYMBOL_ICON_SLOT_COUNT);
    }

    private getSkeletonDataForSymbol(symbolCode: string): sp.SkeletonData {
        const mapping = this.symbolIconMappings.find(m => m.symbolCode === symbolCode);
        return mapping ? mapping.spineSymbol : null!;
    }

    private updateSymbolIcons(symbolCodes: string[]): void {
        if (!this.jackpotCollectSpine) return;
        for (let i = 0; i < this.symbolIconSkeletons.length; i++) {
            const skeleton = this.symbolIconSkeletons[i];
            if (!skeleton) continue;
            const node = skeleton.node;
            const symbolCode = symbolCodes[i];
            const skeletonData = symbolCode ? this.getSkeletonDataForSymbol(symbolCode) : null!;
            if (!skeletonData) {
                node.active = false;
                continue;
            }

            const bone = this.jackpotCollectSpine.findBone(`${this.symbolSlotPrefix}${i + 1}`);
            if (!bone || !node.parent) {
                node.active = false;
                continue;
            }

            node.active = true;
            skeleton.skeletonData = skeletonData;
            const animName = this.resolveIdleAnimName(skeleton);
            if (animName) {
                skeleton.setAnimation(0, animName, true);
            }
            this.syncSymbolIconToBone(node, bone, i);
        }
    }

    private resolveIdleAnimName(skeleton: sp.Skeleton): string {
        const hasPreferred = SpineUtils.hasAnimation(skeleton, this.animIdle);
        const hasFallback = SpineUtils.hasAnimation(skeleton, this.animIdleFallback);
        if (hasPreferred) return this.animIdle;
        if (hasFallback) return this.animIdleFallback;
        return "";
    }

    private syncSymbolIconsToSlots(): void {
        if (!this.jackpotCollectSpine) return;
        for (let i = 0; i < this.symbolIconSkeletons.length; i++) {
            const skeleton = this.symbolIconSkeletons[i];
            if (!skeleton || !skeleton.node.active) continue;
            const bone = this.jackpotCollectSpine.findBone(`${this.symbolSlotPrefix}${i + 1}`);
            if (!bone) continue;
            this.syncSymbolIconToBone(skeleton.node, bone, i);
        }
    }

    private syncSymbolIconToBone(node: cc.Node, bone: any, index: number): void {
        if (!this.jackpotCollectSpine || !node.parent) return;
        const worldPos = this.jackpotCollectSpine.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
        const localPos = node.parent.convertToNodeSpaceAR(worldPos);
        node.setPosition(localPos);
        node.setScale(this.iconScale.x, this.iconScale.y);
        node.setSiblingIndex(node.parent.childrenCount - 1);

        const slot = this.jackpotCollectSpine.findSlot(`${this.symbolSlotPrefix}${index + 1}`);
        if (slot && slot.color) {
            (node as any).opacity = Math.round(slot.color.a * 255);
        }
    }

    private triggerMoneyCount(): void {
        if (this._hasTriggeredMoneyCount) return;
        this._hasTriggeredMoneyCount = true;
        if (this.winAmount) {
            this.winAmount.active = true;
        }
        this.syncMoneyToSlot();
        this.startParticle();
        this.startUpdateWinAmount();
    }

    startParticle(): void { }
    stopParticle(): void { }

    playSoundStart(): void {
        switchMusicWithFade(this.soundPlayer, this.bgmJackpotId, true);
    }

    stopJackpotBGM(): void {
        stopCurrentMusic(this.soundPlayer);
    }

    resumeMainBGM(fadeTime: number = this.bgmResumeFadeTime): void {
        const currentMode = this.dataStore.currentGameMode;
        const inFreeGame = currentMode === GAME_MODE_ENUM.FREE_GAME
            || currentMode === (GAME_MODE_ENUM as any).FREE_OPTION_GAME;

        if (inFreeGame) {
            switchMusicWithFade(this.soundPlayer, this.bgmFreeGameId, true, fadeTime);
            return;
        }
        fadeToMainBGM(this.soundPlayer, fadeTime);
    }

    playSoundEnd(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playSfx(this.sfxJackpotEndId);
        }
    }

    startUpdateWinAmount(): void {
        this._popupState = JackpotWinState.COUNTING;
        this._isUpdating = true;
        this.startCountingLoopSfx();

        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.formatDisplayWinAmount(0);
        }

        const duration = this.animDuration || 10;
        const targetVal = Number(this.jackpotValue) || 0;
        const tweenState = { progress: 0 };

        this._tweenCounting = cc.tween(tweenState)
            .to(duration, { progress: 1 }, {
                progress: (_start: number, _end: number, _current: number, ratio: number) => {
                    const currentVal = Math.round((targetVal * ratio) * 100) / 100;
                    if (this._lbWinAmount) {
                        this._lbWinAmount.string = this.formatDisplayWinAmount(currentVal);
                    }
                    return ratio;
                }
            })
            .call(() => {
                this._tweenCounting = null;
                this.finishCounting();
            })
            .start();
    }

    playSoundCountingEnd(): void {
        this.stopCountingLoopSfx();
        if (this.soundPlayer) {
            this.soundPlayer.playSfx(this.sfxCountingStopId);
        }
    }

    playSkeletonAnim(): void {
        if (!this.jackpotSpine || !this.jackpotSpine.skeletonData) {
            this.triggerMoneyCount();
            return;
        }
        this.jackpotSpine.node.active = true;
        this.jackpotSpine.clearTracks();
        this.jackpotSpine.setToSetupPose();
        this.jackpotSpine.setAnimation(0, 'in', false);

        this._isMoneySlotMoving = true;
        this.syncMoneyToSlot();

        this.jackpotSpine.setEventListener((_trackEntry: any, event: any) => {
            if (event?.data?.name === this.eventNameMoneyCount) {
                this.triggerMoneyCount();
            }
        });

        this.jackpotSpine.setCompleteListener((trackEntry: any) => {
            if (trackEntry && trackEntry.animation && trackEntry.animation.name === 'in') {
                this.jackpotSpine.setCompleteListener(null);
                this.jackpotSpine.setEventListener(null);
                this._isMoneySlotMoving = false;
                this.triggerMoneyCount();
                this.syncMoneyToSlot();
                this.jackpotSpine.setAnimation(0, 'loop', true);
            }
        });
    }

    skip(): void {
        this.onClick();
    }

    public onClick(event?: cc.Event.EventTouch): void {
        if (event) event.stopPropagation();
        const now = Date.now();
        if (now - this._lastClickTime < 300) return;
        this._lastClickTime = now;

        if (!this._hasTriggeredMoneyCount) return;

        if (this._popupState === JackpotWinState.COUNTING) {
            this.playSoundSkip();
            this.skipCounting();
        } else if (this._popupState === JackpotWinState.COUNTING_COMPLETED) {
            if (this._canClickToClose) {
                this.closePopup();
            }
        } else if (this._popupState === JackpotWinState.CLOSING) {
            this.exit();
        }
    }

    private skipCounting(): void {
        if (this._tweenCounting) {
            this._tweenCounting.stop();
            this._tweenCounting = null;
        }
        this.finishCounting();
    }

    private finishCounting(autoCloseDelay: number = 3.0): void {
        if (this._popupState === JackpotWinState.COUNTING_COMPLETED || this._popupState === JackpotWinState.CLOSING) {
            return;
        }
        this._popupState = JackpotWinState.COUNTING_COMPLETED;
        this._isUpdating = false;

        if (this._lbWinAmount) {
            this._lbWinAmount.string = this.formatDisplayWinAmount(this.jackpotValue);
        }

        if (this.jackpotSpine && this.jackpotSpine.skeletonData) {
            this.syncMoneyToSlot();
            const currentTrack = this.jackpotSpine.getCurrent(0);
            if (!currentTrack || (currentTrack.animation && currentTrack.animation.name !== 'in' && currentTrack.animation.name !== 'loop')) {
                this.jackpotSpine.setAnimation(0, 'loop', true);
            }
        }

        this.playSoundCountingEnd();
        this.stopParticle();
        this.playSoundEnd();
        this.stopJackpotBGM();
        if (this._tweenResumeBgm) this._tweenResumeBgm.stop();
        this._tweenResumeBgm = cc.tween(this.node)
            .delay(this.bgmResumeDelay)
            .call(() => {
                this.resumeMainBGM();
            })
            .start();

        this._canClickToClose = false;
        if (this._tweenDebounce) this._tweenDebounce.stop();
        this._tweenDebounce = cc.tween(this.node)
            .delay(1.0)
            .call(() => {
                this._canClickToClose = true;
            })
            .start();
        
        if (this._tweenAutoClose) this._tweenAutoClose.stop();
        this._tweenAutoClose = cc.tween(this.node)
            .delay(autoCloseDelay)
            .call(() => {
                this.closePopup();
            })
            .start();
    }

    finish(): void {
        this.finishCounting();
    }

    private closePopup(): void {
        if (this._popupState === JackpotWinState.CLOSING) return;
        this._popupState = JackpotWinState.CLOSING;

        this.cleanupTweens();
        this.playOutAnimation().then(() => {
            this.exit();
        });
    }

    private hideWinAmount(): void {
        this._isMoneyHidden = true;
        this._isMoneySlotMoving = false;
        if (this.winAmount) this.winAmount.active = false;
        if (this._lbWinAmount) this._lbWinAmount.string = '';
    }

    private playOutAnimation(): Promise<void> {
        return new Promise<void>((resolve) => {
            if (!this.jackpotSpine || !this.jackpotSpine.skeletonData) {
                this.hideWinAmount();
                resolve();
                return;
            }
            this._isMoneySlotMoving = true;

            this.jackpotSpine.setEventListener((_trackEntry: any, event: any) => {
                if (event?.data?.name === this.eventNameMoneyOut) {
                    this.hideWinAmount();
                }
            });

            this.jackpotSpine.setCompleteListener((trackEntry: any) => {
                if (trackEntry && trackEntry.animation && trackEntry.animation.name === 'out') {
                    this.jackpotSpine.setCompleteListener(null);
                    this.jackpotSpine.setEventListener(null);
                    this.hideWinAmount();
                    resolve();
                }
            });
            this.jackpotSpine.setAnimation(0, 'out', false);
        });
    }

    private cleanupTweens(): void {
        if (this._tweenCounting) {
            this._tweenCounting.stop();
            this._tweenCounting = null;
        }
        if (this._tweenDebounce) {
            this._tweenDebounce.stop();
            this._tweenDebounce = null;
        }
        if (this._tweenAutoClose) {
            this._tweenAutoClose.stop();
            this._tweenAutoClose = null;
        }
        if (this._tweenResumeBgm) {
            this._tweenResumeBgm.stop();
            this._tweenResumeBgm = null;
        }
    }

    async exit(): Promise<void> {
        this._popupState = JackpotWinState.IDLE;
        this.stopCountingLoopSfx();
        this.cleanupTweens();
        this._isMoneySlotMoving = false;
        this._isMoneyHidden = false;
        if (this.jackpotSpine) {
            this.jackpotSpine.setCompleteListener(null);
            this.jackpotSpine.setEventListener(null);
            this.jackpotSpine.clearTracks();
            this.jackpotSpine.node.active = false;
        }
        if (this.winAmount) {
            this.winAmount.active = true;
        }
        if (this._lbWinAmount) {
            this._lbWinAmount.string = '';
        }
        await this.eventManager.emit('JACKPOT_WIN_COMPLETED');
        super.exit();
    }

    onDestroy(): void {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.unschedule(this.skipFromSpace);
        if (this.node) {
            this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
        }
    }
}
```
