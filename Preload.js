class Preload extends Phaser.Scene{
  constructor(){
    super('Preload')
  }
  preload() {
    this.load.audio('hino', ['sound/AngolaAvante.mp3'])
    this.load.audio('hino2', ['sound/AngolaAvante2.mp3'])
    this.load.image('fundo','assets/road.png')
    this.load.image('insignia','assets/insignia.png')
    this.load.image('play','assets/Play.png')
    this.load.image('left','assets/left.png')
    this.load.image('rigth','assets/rigth.png')
    this.load.image('policia', 'assets/Police.png')
    this.load.image('audi', 'assets/Audi.png')
    this.load.image('viper', 'assets/Black_viper.png')
    this.load.image('ambulancia', 'assets/Ambulance.png')
    this.load.image('van', 'assets/Mini_van.png')
    this.load.image('taxi', 'assets/taxi.png')
    this.load.image('car', 'assets/Car.png')
    this.load.image('camiao', 'assets/truck.png')
    this.load.image('carrinha', 'assets/Mini_truck.png')
    this.load.image('coins','assets/coin.png')
    this.load.image('2k','assets/2k.png')
    this.load.spritesheet("player", "assets/player.png",{frameWidth:50, frameHeight:50})
  }
  create(){
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('player',{
        start: 16,
        end: 19
      }),
      frameRate: 8,
      repeat: -1
    })
    this.anims.create({
      key: 'lados',
      frames: this.anims.generateFrameNumbers('player',{
        start: 8,
        end: 11
      }),
      frameRate: 8,
      repeat: -1
    })
    this.scene.start('StartScene')
  }
}