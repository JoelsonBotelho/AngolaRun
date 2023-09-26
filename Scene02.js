class Scene02 extends Phaser.Scene{
  constructor(){
    super('Scene02')
  }
  init(data){
    this.score = data.score
  }
  create() {
    this.hino = this.sound.add('hino2')
    this.hino.play({
      volume: .5,
      loop: true
    })
    this.fundo = this.add.image(0,0,'fundo').setOrigin(0,0)
    this.left = this.physics.add.image(60,700/2,'left')
    this.rigth = this.physics.add.image(440,700/2,'rigth')
//COIN==================================
    this.coins = this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    let coins = this.coins.create(135,60,'coins').setScale(0.03,0.03)
      coins.speed = 2
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(135,150,'coins').setScale(0.03,0.03)
      coins.speed = 2
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(135,250,'coins').setScale(0.03,0.03)
      coins.speed = 2
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(135,350,'coins').setScale(0.03,0.03)
      coins.speed = 2
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(135,450,'coins').setScale(0.03,0.03)
      coins.speed = 2
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(210, 0,'2k').setScale(0.15,0.10)
      coins.speed = 1
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(210,150,'2k').setScale(0.15,0.10)
      coins.speed = 1
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(210,350,'2k').setScale(0.15,0.10)
      coins.speed = 1
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(290, 0,'2k').setScale(0.15,0.10)
      coins.speed = 1
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(290,150,'2k').setScale(0.15,0.10)
      coins.speed = 1
      coins.minY = -60
      coins.maxY = 900
    coins = this.coins.create(365,350,'2k').setScale(0.15,0.10)
      coins.speed = 1
      coins.minY = -60
      coins.maxY = 900
//COIN======================================
    this.car = this.physics.add.group({
      allowGravity: false,
      immovable: true
    })
    let car = this.car.create(135,60,'audi').setScale(0.50,0.50)
      car.speed = 5
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(135, -90, 'policia').setScale(0.50,0.50)
      car.speed = 5
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(210,60,'ambulancia').setScale(0.50,0.50)
      car.speed = 3
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(210,-300,'viper').setScale(0.50,0.50)
      car.speed = 3
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(290,-200,'van').setScale(0.50,0.50)
      car.speed = 2
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(290,-600,'taxi').setScale(0.50,0.50)
      car.speed = 2
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(365,-200,'car').setScale(0.50,0.50)
      car.speed = 1
      car.minY = -50
      car.maxY = 1200
    car = this.car.create(365,-600,'van').setScale(0.50,0.50)
      car.speed = 1
      car.minY = -50
      car.maxY = 1200
    this.player = this.physics.add.sprite(500 / 2, 650, "player")
    .setScale(1, 1)
    this.player.body.setSize(35,45)
    this.player.setCollideWorldBounds(true)
    this.left.setCollideWorldBounds(true)
    this.rigth.setCollideWorldBounds(true)
    this.physics.add.collider(this.player, this.rigth)
    this.physics.add.collider(this.player, this.left)
    this.physics.add.overlap( this.player, this.coins, this.collectCoins, null, this)
    this.physics.add.collider(this.player, this.car, this.enemyHit, null, this)
    this.txtScore = this.add.text(400, 0,`SCORE: ${this.score}`, {fontSize: '16px'}).setShadow(0,0,'#000',3)
    this.setScore()
    this.gameOver = false
    //=================================================================
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
  }
  enemyHit(player, car){
    this.hino.stop()
    this.physics.pause()
    player.setTint(0xff0000)
    player.anims.stop()
    this.gameOver = true
    setTimeout(()=>{
      this.add.text(150, game.config.height/2, 'GAME OVER', {fontSize:'40px'}).setOrigin(0).setShadow(0,0,'#000',3)
      setTimeout(()=>{
        this.add.text(10, 140, 'PRECIONA A BARRA DE ESPACO', {fontSize:'30px'}).setOrigin(0)
        this.input.keyboard.addKey('space').on('down',()=>{
          this.scene.start('StartScene')
        })
      }, 1000)
    }, 1000)
  }
  movCar(c){
    if(c.y > c.maxY){
      c.y = c.minY
    }
    c.y += c.speed
  }
  setScore(){
    this.txtScore.setText(this.score > 9 ? `SCORE: ${this.score}`:`SCORE: 0${this.score}`)
  }
  collectCoins(player, coins){
    coins.y = coins.minY
    coins.x == 135 ? this.score+=5 : this.score+=2
    this.txtScore.setText('Score: '+ this.score)
  }
  movCoins(coins){
    if(coins.y > coins.maxY){
      coins.y = -60
    }
    coins.y += coins.speed
  }
  update() {
    if(!this.gameOver){
      let cursors = this.input.keyboard.createCursorKeys();
      if (cursors.left.isDown ||this.a.isDown){
        this.player.flipX = false
        this.player.anims.play('lados',true)
        this.player.setVelocityX(-200);
       }
      else if(cursors.right.isDown || this.d.isDown){
        this.player.flipX = true
        this.player.anims.play('lados',true)
        this.player.setVelocityX(200);
       }
      else {
        this.player.setVelocityX(0);
        this.player.anims.play('walk',true)
      }
      this.car.children.iterate((c)=>{
        this.movCar(c)
      })
      this.coins.children.iterate((c)=>{
        this.movCoins(c)
      })
    }
  }
}