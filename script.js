//  ------------ Setup ------------
window.focus;
const SCREENWIDTH = innerWidth;
const SCREENHEIGHT = innerHeight;
let gameCanvas = document.getElementById("gameCanvas");
let c = gameCanvas.getContext("2d"); // Drawing object
gameCanvas.height = SCREENHEIGHT;
gameCanvas.width = SCREENWIDTH;
// -------------------------------------
// Player variables
let playerX = 100;
let playerY = 700;
let playerWidth = 30;
let playerHeight = 60;
let dx = 12;
let dy = 12;

let directions = {
  left: false,
  right: false,
  up: false,
  down: false,
};





// ----------------------------------------
// ---------- Player Cordinater ------------

function cord(){
    // Get the elements with the IDs "car" and "car2"
    const playerdetect = document.getElementById("car");
  
  // Get the coordinates of each element
    const playerRect = car.getBoundingClientRect();
}


// -------------------------------------
// ------------ Player movement ------------




document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      directions.left = true;
      break;
    case "d":
      directions.right = true;
      break;
    case " ":
      directions.up = true;
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (e) => {
    console.log(e)
  switch (e.key) {
    case "a":
      directions.left = false;
      break;
    case "d":
      directions.right = false;
      break;
    case " ":
      directions.up = false;

      break;
    default:
      break;
  }
});
// -------------------------------------
// ------------ Animation ------------
function animate() {
  requestAnimationFrame(animate); // Run gameloop recursively
  c.clearRect(0, 0, gameCanvas.width, gameCanvas.height); // Clear screen

  c.fillRect(playerX, playerY, playerWidth, playerHeight); // Draw player

  if (directions.right) {
    playerX += dx;
  }

  if (directions.left) {
    playerX -= dx;
  }

  if (directions.up) {
    playerY -= 20;
  }

  if (directions.down) {
    playerY += dy;
  }
}
// -------------------------------------
// ------------ Start game ------------
animate();