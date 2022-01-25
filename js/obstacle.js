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
    if (dist(obstacleX, obstacleY, playerX, playerY) < playerInfo.width / 2) {
      console.log('colllision')
    } else {
      return game.player.y
    }
  }
}

// class Lazer {
//   constructor() {
//     this.r = 20
//     this.x = width
//     this.y = random(300, height - 10 - this.r)
//     this.width = this.r
//     this.height = this.r
//     this.speed = 20
//   }

//   move() {
//     this.x -= this.speed * levelSpeed
//   }

//   draw() {}

//   show() {
//     image(game.lazer, this.x, this.y)
//     fill(255)
//   }
// }
