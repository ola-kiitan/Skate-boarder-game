class Coins {
  constructor(image) {
    this.image = image
    this.x = width
    this.y = (Math.random() * height) / 1.5
    this.width = 30
    this.height = 30
  }

  draw() {
    this.x--
    image(this.image, this.x, this.y, this.width, this.height)
  }
  collision(playerInfo) {
    const playerX = playerInfo.x + playerInfo.width / 2
    const playerY = playerInfo.y + playerInfo.height / 2
    const coinX = this.x + this.width / 2
    const coinY = this.y + this.height / 2
    if (dist(coinX, coinY, playerX, playerY) > 15) {
      return false
    } else {
      game.player.score += 10
      return true
    }
  }
}
