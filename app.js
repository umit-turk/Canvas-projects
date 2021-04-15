const canvas = document.getElementById("canvas");
const eraser = document.getElementById("eraser");
const ctx = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
let radius = 10;
let eraseMode = false;
let color = "black";
let canvasStartX;
let canvasStartY;

ctx.fillStyle = "white"
ctx.fillRect(0,0,WIDTH,HEIGHT);


canvas.addEventListener("mousemove", (e) => {
    canvasStartX = e.target.offsetLeft;
    canvasStartY = e.target.offsetTop;
    
    if(e.buttons === 1) {
        console.log("canvastayım")
        drawCircle(e.x, e.y)
    }
})


canvas.addEventListener("mousedown", (e) => {
    drawCircle(e.x, e.y)
})



function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x - canvasStartX, y - canvasStartY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 5;
    
}


eraser.addEventListener("click", function(){
    eraseMode = !eraseMode;
    if(eraseMode) {
        eraser.style.border = "1px solid tomato"
        color = "white";
        radius = 15;
    } else {
        eraser.style.border = "1px solid black";
        color = "black";
        radius = 5;
    }
})

