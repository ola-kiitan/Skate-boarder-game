class Obstacle {
  constructor(image) {
    this.image = image
    this.x = 500
    this.y = 300
    this.width = 100
    this.height = 100
  }
  draw() {
    this.x--
    image(game.obstacleImages.src, this.x, this.y, this.width, this.height)
  }
}
