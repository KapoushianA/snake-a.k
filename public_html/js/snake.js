var snake;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
gameDraw();

function gameInitialize() {
    var canvas= document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height =screenHeight;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle ="rgb(158, 237, 255)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}


