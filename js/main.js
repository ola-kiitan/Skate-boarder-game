const game = new Game()
let playMode = false

function preload() {
  game.preload()
}
function setup() {
  createCanvas(1020, 680)
  scroll = 0
  game.setup()
}
function draw() {
  game.draw()
}
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump()
  }
  if (keyCode === 13) {
    game.stage = 1
    game.backgroundSound.play()
    // document.location.reload()
  }

  if (keyCode === 8) {
    document.location.reload()
  }
}
