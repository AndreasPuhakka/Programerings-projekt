// ------------ Setup ------------
window.focus;
const SCREENWIDTH = innerWidth;
const SCREENHEIGHT = innerHeight;
let gameCanvas = document.getElementById("gameCanvas");
let c = gameCanvas.getContext("2d"); // Drawing object
gameCanvas.height = SCREENHEIGHT;
gameCanvas.width = SCREENWIDTH;
let gameover = document.getElementById("gameover")

// -------------------------------------
// Player variables
let playerX = 500;
let playerY = 700;
let playerWidth = 100;
let playerHeight = 120;
let dx = 3;
let dy = 0; // initial vertical velocity
const gravity = 0.15; // gravitational force
const moving = 1;

let directions = {
left: false,
right: false,
up: false,
down: false,
};


let img = new Image();
img.onload = function(){
};
img.src="media/apa.png"







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
    requestAnimationFrame(animate); 

    c.clearRect(0, 0, gameCanvas.width, gameCanvas.height); 
    c.drawImage(img, playerX, playerY, playerWidth, playerHeight)

    dy += gravity;
    

    if (directions.right) {
        playerX += dx;
    }

    if (directions.left) {
        playerX -= dx;
    }

    if (directions.up) {
        if (playerY + playerHeight >= SCREENHEIGHT) {
            dy = -10;
        }
    }

    playerY += dy;
    playerX -= dx/4;

    if (playerY + playerHeight > SCREENHEIGHT) {
        playerY = SCREENHEIGHT - playerHeight;
        dy = 0;
    }

    // if (playerX - playerWidth/2 > SCREENWIDTH) {
    //     playerX = -playerWidth
    //     gameCanvas.style.background = "url('media/stad.png') no-repeat"
    // }
    if (playerX + playerWidth/2 < 0) {
        gameover.style.display = ("block")
        playerX -= 0;
        gameCanvas.style.animation = ("back 0s infinite linear")
        

    }

}

function game() {

}






// -------------------------------------
// ------------ Start game ------------
animate();
