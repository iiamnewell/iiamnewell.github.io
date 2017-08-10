
class Play {

  preload() {
    this.load.image("background","background.png")
    this.load.image("soundcloud","soundcloud.png")


  }

  create() {
    this.bg = this.add.tileSprite(0,0,320,568,"background")
    this.bg.autoScroll(0,100)
    this.soundcloud1 = this.add.sprite(50,0,"soundcloud")
    this.soundcloud2 = this.add.sprite(50,200,"soundcloud")
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.physics.enable(this.soundcloud1)
    game.physics.enable(this.soundcloud2)
    this.soundcloud1.body.collideWorldBounds = true
    this.soundcloud2.body.collideWorldBounds = true
    this.soundcloud1.body.gravity.y = 800
    this.soundcloud2.body.gravity.y = 800
    this.soundcloud1.body.bounce.setTo(0.5)
    this.soundcloud2.body.bounce.setTo(1.0)
    //this.soundcloud1.body.velocity.x = 600
    //this.soundcloud2.body.velocity.x = -600
    this.cursors = game.input.keyboard.createCursorKeys()
  }
  update() {
    if (this.cursors.down.isDown){
      this.soundcloud1.body.velocity.y = 800
}
if (this.cursors.up.isDown){
  this.soundcloud1.body.velocity.y = -800
}
if (this.cursors.left.isDown){
  this.soundcloud1.body.velocity.x = -800
}
if (this.cursors.right.isDown){
  this.soundcloud1.body.velocity.x = 800
}

    game.physics.arcade.collide(this.soundcloud1,this.soundcloud2)
  }



}



var game = new Phaser.Game(320,568)
game.state.add("Play",Play)
game.state.start("Play")
