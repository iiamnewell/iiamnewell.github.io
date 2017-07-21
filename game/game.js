
class Play {
    preload() {
      console.log("Preload")
      game.load.spritesheet("bg","assets/background.png",320,568,2)
      game.load.spritesheet("face","assets/face.png",64,64,2)
    }
    create() {
      console.log("Create")
      game.physics.startSystem(Phaser.Physics.ARCADE)

      // bg
      this.bg = game.add.sprite(0,0,"bg")

      // face
      this.face = game.add.sprite(160,500,"face")
      game.physics.arcade.enable(this.face)
      this.face.body.gravity.y = 1000
      this.face.body.drag.x = 600
      this.face.body.collideWorldBounds = true
      this.face.body.bounce.setTo(1.0)

      this.badface = game.add.sprite(160,30,"face")
      game.physics.arcade.enable(this.badface)
      this.badface.body.gravity.y = 2000
      this.badface.body.bounce.setTo(1)

      this.cursors = game.input.keyboard.createCursorKeys();
    }
    update() {

      game.physics.arcade.collide(this.face,this.badface)

      if (this.cursors.left.isDown){
        this.face.body.velocity.x = -300
    }
    if (this.cursors.right.isDown){
      this.face.body.velocity.x = 300
    }
    if (this.cursors.up.isDown) {
      this.face.body.velocity.y = -1000
    }

    if (this.badface.y > 568){
      this.badface.y = -20
      this.badface.x = game.rnd.integerInRange(0,280)
      this.badface.body.velocity.y = 0
      this.badface.body.velocity.x = 0

    }
  }
}
var game = new Phaser.Game(320,568)
game.state.add("Play",Play)
game.state.start("Play")
