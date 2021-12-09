export default class MainScene extends Phaser.Scene {

    guyRenderCompleted = false;
    girlRenderCompleted = false;
    chooseYourDressStartImageCompleted = false;
    chooseLeftDress = false;
    chosseRightDress = false;
    girlsDressesScaling = false;
    dressRightRendered = false;


    guy = null;
    girl = null;
    guyTextStart = null;
    girlTextStart = null;
    chooseYourDressText = null;
    scaleGirlTextStart = 0;

    dressLeft = null;
    dressRight = null;


    constructor() {
        super('MainScene');
    }


    preload() {
        this.load.image('dark-background', 'assets/dark-background.png');
        this.load.image('guy-base', 'assets/guy-base.png');
        this.load.image('background-intro', 'assets/background-intro.png');
        this.load.image('start-text-guy', 'assets/start-text-guy.png');
        this.load.image('girl', 'assets/girl.png');
        this.load.image('start-text-girl', 'assets/start-text-girl.png');
        this.load.image('choose-your-dress', 'assets/choose-your-dress.png');
        this.load.image('choose-your-dress-text', 'assets/choose-your-dress-text.png');
        this.load.image('dress-left', 'assets/dress-left.png');
        this.load.image('dress-right', 'assets/dress-right.png');
        this.load.image('hand-hint-pointer', 'assets/hand-hint-pointer.png');

        this.load.image('dress-left-dressed', 'assets/dress-left-dressed.png');
        this.load.image('dress-right-dressed', 'assets/dress-right-dressed.png');
        this.load.image('choose-your-bag', 'assets/choose-your-bag.png');
        this.load.image('progress-bar-start', 'assets/progress-bar-start.png');
    }

    create() {
        this.add.image(300, 450, 'background-intro');
        this.darkbg = this.add.image(300, 450, 'dark-background');
        // Phaser.Display.Align.In.TopCenter(block, pic);
        // Phaser.Display.Align.In.Center('ackground-intro', this.add.zone(400, 300, 800, 600));
        this.guy = this.add.image(300, 450, 'guy-base');
        this.guyTextStart = this.add.image(300, 450, 'start-text-guy').setScale(0.1);

        setTimeout(() => {
            this.guyRenderCompleted = true;
        }, 750);
        setTimeout(() => {
            this.girlRenderCompleted = true;


        }, 1000);
        // this.input.setDefaultCursor('url(assets/hand-hint-pointer.png), pointer');

    }

    update() {
        if (this.guyTextStart.scale < 1) {
            this.guyTextStart.scale += 0.05;
        }

        if (this.guyRenderCompleted && !this.girlRenderCompleted) {
            this.guy.destroy();
            this.guyTextStart.destroy();
            this.girl = this.add.image(300, 450, 'girl');
            this.girlRenderCompleted = true;
            this.girlTextStart = this.add.image(300, 400, 'start-text-girl').setScale(0.1);
        }
        if (this.girlRenderCompleted && this.girlTextStart.scale < 1) {
            this.girlTextStart.scale += 0.01;

            if (this.girlTextStart.scale > 0.99) {
                this.girl.destroy();
                this.girlTextStart.destroy();
                this.darkbg.destroy();
                this.girlsDressesScaling = true;
                this.chooseYourDressText = this.add.image(300, 31, 'choose-your-dress-text');
                this.add.image(300, 450, 'choose-your-dress');
                this.dressLeft = this.add.image(165, 703, 'dress-left').setScale(0.1)
                    .setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });

                this.dressLeft.on('pointerdown', function () {
                    //do things on click
                    // this.add.image(300, 400, 'dress-left-dressed');
                    // this.chooseYourDressText.destroy();
                    console.log('AAAAA');
                });


                // this.add.image(435, 703, 'dress-right').setScale(0.5);
                // this.add.image(300, 450, 'dress-right-dressed');
            }


        }

        //============================ появление платьев на выбор=================================================//       
        if (this.girlsDressesScaling) {

            if (this.dressLeft.scale >= 0.5) {
                this.girlsDressesScaling = false;
                this.dressRight = this.add.image(435, 703, 'dress-right').
                    setScale(0.1).setInteractive({ cursor: 'url(assets/hand-hint-pointer.png), pointer' });
                this.dressRight.on('pointerdown', function () {
                    //do things on click
                    console.log('bbbbb');
                });
                this.dressRightRendered = true;
            }
            else {
                this.dressLeft.scale += 0.1;
            }
        }
        if (this.dressRightRendered && this.dressRight.scale < 0.5) {


            this.dressRight.scale += 0.1;

        }
        else { this.dressRightRendered = false }

        //==========================================нажатие на выбранное платье===============================


    }
}


   // this.fplayer = player;
        //this.fplayer.x += 1;
        // player.setVelocityX(-160);