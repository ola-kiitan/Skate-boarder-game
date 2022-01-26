class Game {
  setup() {
    this.player = new Player()
    this.background = new Background()
    this.obstacles = []
    this.coins = []

    // this.backgroundSound.loop()
  }

  constructor() {
    this.backgroundImages
    this.obstacleImages
    this.coinImage
    this.backgroundSound
    this.losingScreen
    this.winningScreen
    this.stage = 0
  }

  preload() {
    // this.backgroundSound = loadSound(
    //   '../assets/cyberpunk-street-files/music/cyberpunk-street.mp3'
    // )
    this.losingScreen = loadImage('../assets/crash.png')
    this.winningScreen = loadImage('../assets/startImg.png')
    this.startingScreen = loadImage('../assets/startImg.png')

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

    // this.obstacleImages = [
    //   { src: loadImage('../assets/taxi_W.png') },
    //   { src: loadImage('../assets/raceFuture_W.png') },
    //   { src: loadImage('../assets/sedan_W.png') },
    //   { src: loadImage('../assets/ambulance_W.png') },
    // ]
  }
  draw() {
    clear()
    document.querySelector('#score').innerText = game.player.score
    this.gamePlay()
    if (this.stage == 0) {
      this.startScreen()
    }

    if (this.stage == 1) {
      this.gamePlay()
      playMode = true
    }

    if (this.stage == 2) {
      this.winScreen()
    }

    if (this.stage == 3) {
      this.loseScreen()
    }
  }

  gamePlay() {
    if (playMode) {
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
      this.obstacles.forEach(function (obstacle) {
        if (obstacle.collision(game.player)) {
          return false
        } else {
          return true
        }
      })
    }
  }
  startScreen() {
    this.background.draw()
    this.stage = 0
    image(this.startingScreen, 200, 70, 600, 400)
    document.querySelector('.game-start').style.display = 'flex'
  }

  winScreen() {
    this.background.draw()
    image(this.winningScreen, 250, 100, width / 2, height / 2)

    // fill(33, 90, 126)
    // stroke(33, 90, 126)
    // text('You made it home', 500, height - 80)
  }

  loseScreen() {
    this.background.draw()
    image(this.losingScreen, 250, 100, width / 2, height / 2)
    // stroke(33, 90, 126)
    // fill(33, 90, 126)
    // text('You crashed', 500, height - 80)
    // this.backgroundMusic.stop()
    // this.eatingSound.stop()
    // this.laserSound.stop()
  }
}
