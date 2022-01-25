const game = new Game()

function preload() {
  game.preload()
}
function setup() {
  createCanvas(1020, 680)
  game.setup()
}
function draw() {
  game.draw()
}
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump()
  }
  if (keyCode === 13 && game.player.score <= 0) {
    document.location.reload()
  }
}
