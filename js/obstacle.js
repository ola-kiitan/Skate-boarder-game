class Obstacle {
  constructor(image) {
    this.image = image
    this.x = width
    this.y = random(450, 550)
    this.width = 300
    this.height = 200
  }
  draw() {
    this.x--
    image(this.image, this.x, this.y, this.width, this.height)
  }
  collision(playerInfo) {
    const playerX = playerInfo.x + playerInfo.width / 2
    const playerY = playerInfo.y + playerInfo.height / 2
    const obstacleX = this.x + this.width / 2
    const obstacleY = this.y + this.height / 2
    if (dist(obstacleX, obstacleY, playerX, playerY) > playerInfo.width / 2) {
      return false
    } else {
      game.player.y = this.y - 50
      game.player.score -= 0.5

      console.log('collision')
    }
    if (game.player.score <= 0) {
      game.stage = 3
      playMode = false
      game.player.score = 0
      document.querySelector('.game-over').style.display = 'block'
    }
  }
}

class Birds extends Obstacle {
  constructor(image) {
    super(image)
    this.x = width
    this.y = (Math.random() * height) / 1.3
    this.width = 100
    this.height = 100
  }
}
