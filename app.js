let canvas = document.getElementById("board");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let isDrawing = false;
let mousePos = { x: null, y: null };

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("touchend", end, false);
canvas.addEventListener("mouseup", end, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("touchmove", draw, false);

function start(event) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
    event.preventDefault();
}

function end(event) {
    isDrawing = false;
}

function draw(event) {
    let pos = mousePos;
    if (isDrawing) {
        ctx.lineTo(event.clientX, event.clientY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
}
