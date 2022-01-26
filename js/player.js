class Player {
  constructor() {
    this.score = 0
    this.width = 100
    this.height = 100
    this.x = 0
    this.y = height - this.height
    this.gravity = 0.2
    this.velocity = 0
    this.gameWon = false
  }
  jump() {
    this.velocity = -8
  }

  draw() {
    this.velocity += this.gravity
    this.y += this.velocity
    this.y = constrain(this.y, 50, height - this.height)

    if (this.y >= height - this.height) {
      this.y = height - this.height
    }
    setTimeout(function (win) {
      playMode = false
      game.stage = 2

      document.querySelector('.game-won').style.display = 'block'
    }, 100000)
    image(game.playerImage, this.x, this.y, this.width, this.height)
  }
}
