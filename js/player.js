class Player {
  constructor() {
    this.score = 0
    this.width = 100
    this.height = 120
    this.x = 0
    this.y = height - this.height
    this.gravity = 0.2
    this.velocity = 0
    this.jumping = false
    // this.ymax = 300
    this.range
  }
  jump() {
    if (this.jumping === false) {
      this.velocity = -8
    }
  }

  draw() {
    this.velocity += this.gravity
    this.y += this.velocity

    if (this.y >= height - this.height) {
      this.y = height - this.height
    }
    if (this.y <= height - this.height) {
      this.jumping === true
    }
    //this.range = constrain(game.playerImage, this.y, this.ymax)
    image(game.playerImage, this.x, this.y, this.width, this.height)
  }
}
