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
  if (keyCode === 34) {
    game.player.moveDown()
  }
  if (keyCode === 33) {
    game.player.moveUp()
  }
  if (keyCode === 32) {
    game.player.jump()
  }
}
