var index = 0;

document.getElementById("score").onclick = function() {
    ++index;
    document.getElementById("score").innerHTML = index;
}

var gameBoard = document.getElementById("canvas");
var ctx = gameBoard.getContext("2d");

main();

function main() {
    clearCanvas();
    drawSnake();
}

let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
]

let dx = 10;
let dy = 0;

function clearCanvas() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
    ctx.strokeRect(0, 0, gameBoard.width, gameBoard.height);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}
  
function drawSnakePart(snakePart) {
    ctx.fillStyle = "blue";
    ctx.strokestyle = "black";
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function move_snake() {
  const head = {x: snake[0].x + dx, y: snake[0].y};
  snake.unshift(head);
  snake.pop();
}