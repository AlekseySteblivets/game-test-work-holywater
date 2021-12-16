import Phaser from 'phaser';
// import logoImg from './assets/logo.png';
// import { Toast } from 'phaser3-rex-plugins/templates/ui/ui-components.js';
// import { Sizer } from 'phaser3-rex-plugins/templates/ui/ui-components.js';
// import { Buttons } from 'phaser3-rex-plugins/templates/ui/ui-components.js';

import darkBackgroundImg from './assets/dark-background.png';
import guyBaseImg from './assets/guy-base.png';
import backgroundIntroImg from './assets/background-intro.png';
import startTextGuyImg from './assets/start-text-guy.png';
import girlImg from './assets/girl.png';
import startTextGirlImg from './assets/start-text-girl.png';
import chooseYourDressImg from './assets/choose-your-dress.png';
import chooseYourDressTextImg from './assets/choose-your-dress-text.png';
import dressLeftImg from './assets/dress-left.png';
import dressRightImg from './assets/dress-right.png';
import handHintPointerImg from './assets/hand-hint-pointer.png';
import dressLeftDressedImg from './assets/dress-left-dressed.png';
import dressRightDressedImg from './assets/dress-right-dressed.png';
import chooseYourBagImg from './assets/choose-your-bag.png';
import progressBarStartImg from './assets/progress-bar-start.png';
import progressBarFierstImg from './assets/progress-bar-fierst.png';
import rightDressLeftBagImg from './assets/right-dress-left-bag.png';
import rightDressRightBagImg from './assets/right-dress-right-bag.png';
import leftDressRightBagImg from './assets/left-dress-right-bag.png';
import leftDressLeftBagImg from './assets/left-dress-left-bag.png'
import leftBagImg from './assets/left-bag.png';
import rightBagImg from './assets/right-bag.png';
// =============== выбор аксессуаров======================
import chooseYourAccessoryTextImg from './assets/choose-your-accessory-text.png';
import progressBarSecondImg from './assets/progress-bar-second.png';
import accessLeft from './assets/access-left.png';
import accessRight from './assets/access-right.png';

import leftDressLeftBagLeftAccImg from './assets/scene-choose-acc/left-dress-left-bag-left-acc.png';
import leftDressLeftBagRightAccImg from './assets/scene-choose-acc/left-dress-left-bag-right-acc.png';
import leftDressRightBagLeftAccImg from './assets/scene-choose-acc/left-dress-right-bag-left-acc.png';
import leftDressRightBagRightAccImg from './assets/scene-choose-acc/left-dress-right-bag-right-acc.png';

import rightDressLeftBagLeftAccImg from './assets/scene-choose-acc/right-dress-left-bag-left-acc.png';
import rightDressLeftBagRightAccImg from './assets/scene-choose-acc/right-dress-left-bag-right-acc.png';
import rightDressRightBagLeftAccImg from './assets/scene-choose-acc/right-dress-right-bag-left-acc.png';
import rightDressRightBagRightAccImg from './assets/scene-choose-acc/right-dress-right-bag-right-acc.png';

// ==========================выбор места========================================
import progressBarThierdImg from './assets/progress-bar-thierd.png';
import chooseYourPlaceImg from './assets/choose-your-place.png';
import leftPlaseImg from './assets/left-place.png';
import rightPlaseImg from './assets/right-plase.png';

// ============================финальная сцена=====================================
import finalBgLeftImg from './assets/final-scene/final-bg-left.png';
import finalBgRightImg from './assets/final-scene/final-bg-right.png';
import guyFinalScene from './assets/final-scene/guy-final-scene.png';
import guyFinalSceneText from './assets/final-scene/guy-final-scene-text.png';
import buttonPlayImg from './assets/final-scene/button-play.png';


export default class MainScene extends Phaser.Scene {

    backgrImg = null;
    guyRenderCompleted = false;
    girlRenderCompleted = false;
    chooseYourDressStartImageCompleted = false;
    chooseLeftDress = false;
    chosseRightDress = false;
    girlsDressesScaling = false;
    dressRightRendered = false;
    chooseYourDressGirl = null;
    dressLeftDressed = null;
    dressRightDressed = null;

    progressBar = null;


    guy = null;
    girl = null;
    guyTextStart = null;
    girlTextStart = null;
    chooseYourDressText = null;
    scaleGirlTextStart = 0;

    dressLeft = null;
    dressRight = null;

    // ====выбор сумок====
    chooseYourBagRender = false;
    chooseYourBagText = null;
    bagLeft = null;
    bagRight = null;
    leftDressRightBagImg = null;
    rightDressRightBagImg = null;
    leftDressLeftBagImg = null;
    rightDressLeftBagImg = null;
    progressBarSecond = null;

    //  =======выбор аксесуаров========
    chooseYourAccessory = false;
    chooseYourAccessoryText = null;
    accessRight = null;
    accessLeft = null;

    leftDressLeftBagLeftAccImg = null;
    leftDressLeftBagRightAccImg = null;
    leftDressRightBagLeftAccImg = null;
    leftDressRightBagRightAccImg = null;

    rightDressLeftBagLeftAccImg = null;
    rightDressLeftBagRightAccImg = null;
    rightDressRightBagLeftAccImg = null;
    rightDressRightBagRightAccImg = null;
    // =======================выбор места========================
    chooseYourPlace = false;
    progressBarThierdImg = null;
    chooseYourPlaceImg = null;
    leftPlaseImg = null;
    rightPlaseImg = null;
    // =======================финальная сцена ========================
    finalScene = false;
    finalBgLeftImg = null;
    finalBgRightImg = null;
    guyFinalScene = null;
    guyFinalSceneText = null;
    buttonPlayImg = null;
    toAppStore = false;

    constructor() {
        super('MainScene');
    }


    preload() {
        this.load.image('dark-background', darkBackgroundImg);
        this.load.image('guy-base', guyBaseImg);
        this.load.image('background-intro', backgroundIntroImg);
        this.load.image('start-text-guy', startTextGuyImg);
        this.load.image('girl', girlImg);
        this.load.image('start-text-girl', startTextGirlImg);
        this.load.image('choose-your-dress', chooseYourDressImg);
        this.load.image('choose-your-dress-text', chooseYourDressTextImg);
        this.load.image('dress-left', dressLeftImg);
        this.load.image('dress-right', dressRightImg);
        this.load.image('hand-hint-pointer', handHintPointerImg);

        this.load.image('dress-left-dressed', dressLeftDressedImg);
        this.load.image('dress-right-dressed', dressRightDressedImg);

        this.load.image('progress-bar-start', progressBarStartImg);
        this.load.image('progress-bar-fierst', progressBarFierstImg);

        this.load.image('progress-bar-thierd', progressBarThierdImg);
        //==================== выбор сумок =========================
        this.load.image('choose-your-bag', chooseYourBagImg);
        this.load.image('right-dress-left-bag', rightDressLeftBagImg);
        this.load.image('right-dress-right-bag', rightDressRightBagImg);
        this.load.image('left-dress-right-bag', leftDressRightBagImg);
        this.load.image('left-dress-left-bag', leftDressLeftBagImg);
        this.load.image('left-bag', leftBagImg);
        this.load.image('right-bag', rightBagImg);

        // ===================выбор аксесуаров===================
        this.load.image('choose-your-accessory-text', chooseYourAccessoryTextImg);
        this.load.image('progress-bar-second', progressBarSecondImg);
        this.load.image('access-left', accessLeft);
        this.load.image('access-right', accessRight);

        this.load.image('left-dress-left-bag-left-acc', leftDressLeftBagLeftAccImg);
        this.load.image('left-dress-left-bag-right-acc', leftDressLeftBagRightAccImg);
        this.load.image('left-dress-right-bag-left-acc', leftDressRightBagLeftAccImg);
        this.load.image('left-dress-right-bag-right-acc', leftDressRightBagRightAccImg);

        this.load.image('right-dress-left-bag-left-acc', rightDressLeftBagLeftAccImg);
        this.load.image('right-dress-left-bag-right-acc', rightDressLeftBagRightAccImg);
        this.load.image('right-dress-right-bag-left-acc', rightDressRightBagLeftAccImg);
        this.load.image('right-dress-right-bag-right-acc', rightDressRightBagRightAccImg);
        // ==============================выбор места =================================================
        this.load.image('choose-your-place', chooseYourPlaceImg);
        this.load.image('left-place', leftPlaseImg);
        this.load.image('right-plase', rightPlaseImg);

        // =================================финальная сцена ===========================================
        this.load.image('final-bg-left', finalBgLeftImg);
        this.load.image('final-bg-right', finalBgRightImg);
        this.load.image('guy-final-scene', guyFinalScene);
        this.load.image('guy-final-scene-text', guyFinalSceneText);
        this.load.image('button-play', buttonPlayImg);
    }

    create() {
        this.backgrImg = this.add.image(300, 450, 'background-intro');
        this.darkbg = this.add.image(300, 450, 'dark-background');

        this.guy = this.add.image(300, 450, 'guy-base');
        this.guyTextStart = this.add.image(300, 450, 'start-text-guy').setScale(0.1);

        setTimeout(() => {
            this.guyRenderCompleted = true;
        }, 750);
        setTimeout(() => {
            this.girlRenderCompleted = true;


        }, 1000);

    }

    update() {
        if (this.guyTextStart.scale < 1) {
            console.log('start');
            this.guyTextStart.scale += 0.05;
        }

        if (this.guyRenderCompleted && !this.girlRenderCompleted) {
            console.log('1 girl');
            this.guy.destroy();
            this.guyTextStart.destroy();
            this.girl = this.add.image(300, 450, 'girl');
            this.girlRenderCompleted = true;
            this.girlTextStart = this.add.image(300, 400, 'start-text-girl').setScale(0.6);
        }

        if (this.girlRenderCompleted && this.girlTextStart.scale < 1) {
            this.girlTextStart.scale += 0.01;
            console.log('this.girlRenderCompleted && this.girlTextStart.scale < 1');

            if (this.girlTextStart.scale >= 1) {
                this.girl.destroy();
                this.girlTextStart.destroy();

                this.girlsDressesScaling = true;

                this.chooseYourDressText = this.add.image(300, 31, 'choose-your-dress-text');
                this.chooseYourDressGirl = this.add.image(300, 450, 'choose-your-dress');
                this.dressLeftDressed = this.add.image(300, 465, 'dress-left-dressed');
                this.dressLeftDressed.visible = false;
                this.dressRightDressed = this.add.image(300, 465, 'dress-right-dressed');
                this.dressRightDressed.visible = false;
                this.dressLeft = this.add.image(165, 703, 'dress-left').setScale(0.1)
                    .setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });


                this.dressLeft.on('pointerdown', () => {
                    this.darkbg.destroy();
                    this.dressLeftDressed.visible = true;
                    this.dressRightDressed.visible = false;
                    this.chooseYourDressGirl.destroy();
                    this.chooseYourDressText.destroy();;
                    this.progressBar = this.add.image(300, 31, 'progress-bar-fierst');
                    console.log(222);
                    setTimeout(() => { this.chooseYourBagRender = true }, 500)

                    console.log('AAAAA');
                });

            }


        }

        //============================ появление левого и правого платья на выбор и клик по правому платью=========================//
        if (this.girlsDressesScaling) {
            console.log('girlsDressesScaling');
            if (this.dressLeft.scale >= 0.5) {
                this.girlsDressesScaling = false;
                this.dressRight = this.add.image(435, 703, 'dress-right').
                    setScale(0.1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });
                this.dressRight.on('pointerdown', () => {
                    this.darkbg.destroy();
                    this.dressRightDressed.visible = true;
                    this.dressLeftDressed.visible = false;
                    this.chooseYourDressGirl.destroy();
                    this.chooseYourDressText.destroy();
                    this.progressBar = this.add.image(300, 31, 'progress-bar-fierst');
                    console.log(223);
                    setTimeout(() => {
                        this.chooseYourBagRender = true;
                        console.log('dressRight', 123);
                    }, 500)
                    console.log('bbbbb');
                });
                this.dressRightRendered = true;
            }
            else {
                this.dressLeft.scale += 0.1;
            }
        }


        if (this.dressRightRendered && this.dressRight.scale < 0.5) {
            console.log('this.dressRight.scale < 0.5');
            this.dressRight.scale += 0.1;
        }

        // =========================================================выбор сумок ========================================================

        if (this.chooseYourBagRender) {
            console.log('this.chooseYourBagRender');
            this.chooseYourBagRender = false;
            this.progressBar.destroy();
            this.chooseYourBagText = this.add.image(300, 31, 'choose-your-bag');
            this.dressLeft.destroy();
            this.dressRight.destroy();
            this.bagLeft = this.add.image(165, 703, 'left-bag').setScale(0.5).setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });
            this.bagRight = this.add.image(435, 703, 'right-bag').setScale(0.5).setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });
            if (this.dressRightDressed.visible) {
                this.dressLeftDressed.destroy();

            }
            else {
                this.dressRightDressed.destroy();
            }


            this.bagRight.on('pointerdown', () => {
                this.dressLeftDressed.visible ?
                    this.leftDressRightBagImg = this.add.image(300, 465, 'left-dress-right-bag') :
                    this.rightDressRightBagImg = this.add.image(300, 465, 'right-dress-right-bag');
                this.chooseYourBagText.destroy();
                this.progressBarSecond = this.add.image(300, 31, 'progress-bar-second');
                setTimeout(() => {
                    this.chooseYourAccessory = true;
                }, 500)
                console.log('ccc');
            });
            this.bagLeft.on('pointerdown', () => {
                this.dressRightDressed.visible ?
                    this.rightDressLeftBagImg = this.add.image(300, 465, 'right-dress-left-bag') :
                    this.leftDressLeftBagImg = this.add.image(300, 465, 'left-dress-left-bag');
                this.chooseYourBagText.destroy();
                this.progressBarSecond = this.add.image(300, 31, 'progress-bar-second');
                setTimeout(() => {
                    this.chooseYourAccessory = true;
                }, 500)
                console.log('ddd');
            });

        }

        // =======================================выбор аксессуаров=========================================
        if (this.chooseYourAccessory) {
            this.chooseYourAccessory = false;
            console.log('chooseYourAccessory');
            this.progressBarSecond.destroy();
            this.chooseYourBagText.destroy();
            this.bagLeft.destroy();
            this.bagRight.destroy();
            this.chooseYourAccessoryText = this.add.image(300, 31, 'choose-your-accessory-text');
            this.accessLeft = this.add.image(165, 703, 'access-left').setScale(1).setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });
            this.accessRight = this.add.image(435, 703, 'access-right').setScale(1).setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });

            this.accessLeft.on('pointerdown', () => {
                if (this.leftDressLeftBagImg) {
                    this.leftDressLeftBagLeftAccImg = this.add.image(300, 465, 'left-dress-left-bag-left-acc');
                    this.leftDressLeftBagImg.destroy();
                }
                if (this.leftDressRightBagImg) {
                    this.leftDressRightBagLeftAccImg = this.add.image(300, 465, 'left-dress-right-bag-left-acc');
                    this.leftDressRightBagImg.destroy();
                }
                if (this.rightDressLeftBagImg) {
                    this.rightDressLeftBagLeftAccImg = this.add.image(300, 465, 'right-dress-left-bag-left-acc');
                    this.rightDressLeftBagImg.destroy();
                }
                if (this.rightDressRightBagImg) {
                    this.rightDressRightBagLeftAccImg = this.add.image(300, 465, 'right-dress-right-bag-left-acc');
                    this.rightDressRightBagImg.destroy();
                }
                console.log('this.accessLeft.on');
                this.chooseYourAccessoryText.destroy();
                this.progressBarThierdImg = this.add.image(300, 31, 'progress-bar-thierd');
                setTimeout(() => {

                    this.chooseYourPlace = true;
                }, 500)
            });

            this.accessRight.on('pointerdown', () => {
                if (this.leftDressLeftBagImg) {
                    this.leftDressLeftBagRightAccImg = this.add.image(300, 465, 'left-dress-left-bag-right-acc');
                    this.leftDressLeftBagImg.destroy();
                }
                if (this.leftDressRightBagImg) {
                    this.leftDressRightBagRightAccImg = this.add.image(300, 465, 'left-dress-right-bag-right-acc');
                    this.leftDressRightBagImg.destroy();
                }

                if (this.rightDressLeftBagImg) {
                    this.rightDressLeftBagRightAccImg = this.add.image(300, 465, 'right-dress-left-bag-right-acc');
                    this.rightDressLeftBagImg.destroy();
                }
                if (this.rightDressRightBagImg) {
                    this.rightDressRightBagRightAccImg = this.add.image(300, 465, 'right-dress-right-bag-right-acc');
                    this.rightDressRightBagImg.destroy();
                }
                this.chooseYourAccessoryText.destroy();
                this.progressBarThierdImg = this.add.image(300, 31, 'progress-bar-thierd');
                setTimeout(() => {

                    this.chooseYourPlace = true;
                }, 500)
            });

        }
        // ==================================выбор места==============================================

        if (this.chooseYourPlace) {
            this.chooseYourPlace = false
            this.progressBarThierdImg.destroy();

            this.accessLeft.destroy();
            this.accessRight.destroy();
            this.chooseYourPlaceImg = this.add.image(300, 31, 'choose-your-place');
            this.leftPlaseImg = this.add.image(165, 703, 'left-place').setScale(1).setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });
            this.rightPlaseImg = this.add.image(435, 703, 'right-plase').setScale(1).setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });

            this.leftPlaseImg.on('pointerdown', () => {
                this.backgrImg.destroy();
                this.finalBgLeftImg = this.add.image(300, 450, 'final-bg-left');
                this.guyFinalScene = this.add.image(349, 450, 'guy-final-scene');
                if (this.leftDressLeftBagLeftAccImg) {
                    this.leftDressLeftBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }
                if (this.leftDressRightBagLeftAccImg) {
                    this.leftDressRightBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }
                if (this.rightDressLeftBagLeftAccImg) {
                    this.rightDressLeftBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }
                if (this.rightDressRightBagLeftAccImg) {
                    this.rightDressRightBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5)
                }

                if (this.leftDressLeftBagRightAccImg) {
                    this.leftDressLeftBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }
                if (this.leftDressRightBagRightAccImg) {
                    this.leftDressRightBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }

                if (this.rightDressLeftBagRightAccImg) {
                    this.rightDressLeftBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }
                if (this.rightDressRightBagRightAccImg) {
                    this.rightDressRightBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                }

                console.log('this.leftPlaseImg.on');
                this.chooseYourPlaceImg.destroy();

                setTimeout(() => {

                    this.finalScene = true;
                }, 500)
            });


            this.rightPlaseImg.on('pointerdown', () => {
                this.backgrImg.destroy();
                this.finalBgRightImg = this.add.image(300, 450, 'final-bg-right');
                this.guyFinalScene = this.add.image(349, 450, 'guy-final-scene');

                if (this.leftDressLeftBagLeftAccImg) {
                    this.leftDressLeftBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.leftDressLeftBagLeftAccImg.destroy();
                }
                if (this.leftDressRightBagLeftAccImg) {
                    this.leftDressRightBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5)
                    // this.leftDressRightBagLeftAccImg.destroy();
                }
                if (this.rightDressLeftBagLeftAccImg) {
                    this.rightDressLeftBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.rightDressLeftBagLeftAccImg.destroy();
                }
                if (this.rightDressRightBagLeftAccImg) {
                    this.rightDressRightBagLeftAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.rightDressRightBagLeftAccImg.destroy();
                }

                if (this.leftDressLeftBagRightAccImg) {
                    this.leftDressLeftBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.leftDressLeftBagRightAccImg.destroy();
                }
                if (this.leftDressRightBagRightAccImg) {
                    this.leftDressRightBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.leftDressRightBagRightAccImg.destroy();
                }

                if (this.rightDressLeftBagRightAccImg) {
                    this.rightDressLeftBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.rightDressLeftBagRightAccImg.destroy();
                }
                if (this.rightDressRightBagRightAccImg) {
                    this.rightDressRightBagRightAccImg.setDepth(1).setOrigin(0.8, 0.5);
                    // this.rightDressRightBagRightAccImg.destroy();
                }

                console.log('this.leftPlaseImg.on');
                this.chooseYourPlaceImg.destroy();

                setTimeout(() => {

                    this.finalScene = true;
                }, 500)
            });
        }

        // =================================================финальная сцена=====================================================
        if (this.finalScene) {
            console.log('this.finalScene');
            this.finalScene = false;
            this.leftPlaseImg.destroy();
            this.rightPlaseImg.destroy();
            this.guyFinalSceneText = this.add.image(300, 400, 'guy-final-scene-text').setScale(1).setDepth(1);
            setTimeout(() => { this.toAppStore = true }, 1500)
        }
        if (this.toAppStore) {
            console.log('this.toAppStore');
            this.toAppStore = false;
            this.buttonPlayImg = this.add.image(300, 795, 'button-play').setDepth(1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' })

            this.guyFinalSceneText.destroy();

            this.buttonPlayImg.on('pointerdown', () => {
                var url = 'https://apps.apple.com/us/app/id1491717191';

                var s = window.open(url, '_blank');

                if (s && s.focus) {
                    s.focus();
                }
                else if (!s) {
                    window.location.href = url;
                }
            });

        }

    }

}

const config = {
    width: 600,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    backgroundColor: '#345678',
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
}

const game = new Phaser.Game(config);
