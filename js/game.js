class Game {
  setup() {
    this.player = new Player()
    this.background = new Background()

    this.obstacles = []
    this.coins = []
  }

  constructor() {
    this.backgroundImages
    this.obstacleImages
    this.coinImage
  }

  preload() {
    this.backgroundImages = [
      {
        src: loadImage('../assets/back-buildings.png'),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage('../assets/far-buildings.png'),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage('../assets/foreground.png'),
        x: 0,
        speed: 2,
      },
    ]
    this.playerImage = loadImage('assets/scooter.png')
    this.coinImage = loadImage('../assets/Coin1_238_238.png')

    // this.obstacleImages = [
    //   { src: loadImage('../assets/taxi_W.png') },
    //   { src: loadImage('../assets/raceFuture_W.png') },
    //   { src: loadImage('../assets/sedan_W.png') },
    //   { src: loadImage('../assets/ambulance_W.png') },
    // ]
  }
  draw() {
    clear()
    this.background.draw()
    this.player.draw()
    if (frameCount % 70 === 0) {
      this.coins.push(new Coins(this.coinImage))
    }
    this.coins.forEach(function (coin) {
      coin.draw()
    })
    this.coins = this.coins.filter(function (coin) {
      if (coin.collision(game.player) || coin.x < 0) {
        return false
      } else {
        return true
      }
    })

    // The non-functional draw comand
    // if (frameCount % 50 === 0) {
    //   this.obstacles.push(new Obstacle(this.obstacleImages))
    // }
    // this.obstacles.forEach(function (obstacle) {
    //   obstacle.draw()
    // })
  }
}
