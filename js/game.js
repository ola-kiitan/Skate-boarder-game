class Game {
  setup() {
    this.player = new Player()
    this.background = new Background()
    // this.lazer = new Lazer()

    this.obstacles = []
    this.coins = []
  }

  constructor() {
    this.backgroundImages
    this.obstacleImages
    this.coinImage
    // this.lazerImage
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
    this.playerImage = loadImage('assets/WXfG.gif')
    this.obstacleImages = loadImage('../assets/ambulance_W.png')
    this.obstacleImagesB = loadImage('../assets/police_W.png')
    this.obstacleImagesC = loadImage('../assets/taxi_W.png')
    this.coinImage = loadImage('../assets/Coin1_238_238.png')
    this.coinImageB = loadImage('../assets/Coin3_238_238.png')
    this.coinImageC = loadImage('../assets/Coin6_238_238.png')
    this.lazerImage = loadImage('../assets/man_kart.png')

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
    //start of coin draw
    if (frameCount % 100 === 0) {
      this.coins.push(new Coins(this.coinImage))
      this.coins.push(new Coins(this.coinImageB))
      this.coins.push(new Coins(this.coinImageC))
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
    // end of coin draw
    // start of Obstacle draw
    if (frameCount % 1500 === 0) {
      this.obstacles.push(new Obstacle(this.obstacleImages))
    }
    if (frameCount % 800 === 0) {
      this.obstacles.push(new Obstacle(this.obstacleImagesB))
    }
    if (frameCount % 300 === 0) {
      this.obstacles.push(new Obstacle(this.obstacleImagesC))
    }
    this.obstacles.forEach(function (obstacle) {
      obstacle.draw()
    })
    this.obstacles = this.obstacles.filter(function (obstacle) {
      if (obstacle.collision(game.player)) {
        return false
      } else {
        return true
      }
    })
  }
}
