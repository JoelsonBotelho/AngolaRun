class StartScene extends Phaser.Scene{
  constructor(){
    super('StartScene')
  }
  create(){
    this.add.image(0,0,'play').setOrigin(0)
    setTimeout(()=>{
      this.add.text(10, 140, 'PRECIONA A BARRA DE ESPACO', {fontSize:'30px'}).setOrigin(0)
      this.input.keyboard.addKey('space').on('down',()=>{
        this.scene.start('Scene01')
      })
    }, 1000)
  }
}