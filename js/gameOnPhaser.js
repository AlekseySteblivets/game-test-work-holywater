import MainScene from './MainScene.js';

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

new Phaser.Game(config);
