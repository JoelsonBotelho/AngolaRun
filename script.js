let game

window.onload = function(){
  const config = {
    type: Phaser.Auto,
    width: 500,
    height: 700,
    scene: [Preload, StartScene, Scene01, Scene02],
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
      default: "arcade",
      arcade: {
        gravity: {y: 0},
        debug: false,
      },
    },
    pixelArt: true
  }
  game = new Phaser.Game(config);
}