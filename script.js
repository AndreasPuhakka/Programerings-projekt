// ------------ Setup ------------
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
let dy = 0; // initial vertical velocity
const gravity = 1; // gravitational force

let directions = {
left: false,
right: false,
up: false,
down: false,
};







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

    // Apply gravity to vertical velocity
    dy += gravity;

    if (directions.right) {
    playerX += dx;
        

    // if (playerX + playerWidth >= SCREENWIDTH) {
    //     playerX = SCREENWIDTH - playerWidth;
    // }
    }

    if (directions.left) {
    playerX -= dx;
    }

    if (directions.up) {
    // Only allow jumping if the player is on the ground
    if (playerY + playerHeight >= SCREENHEIGHT) {
    dy = -12; // set the vertical velocity to a negative value to jump
    }

    
}

// Apply vertical velocity to player position
playerY += dy;

// Keep the player within the bounds of the screen
if (playerY + playerHeight > SCREENHEIGHT) {
playerY = SCREENHEIGHT - playerHeight;
dy = 0; // reset the vertical velocity to zero when the player lands
}
}



// -------------------------------------
// ------------ Start game ------------
animate();
