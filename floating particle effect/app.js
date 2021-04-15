const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

//create contructor function
function Particle(x, y, directionX, directionY, size, color){
    this.x = x;
    this.y = y;
    this.directionsX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

// add draw method to particle prototype
Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}
Particle.prototype.update = function(){
    if(this.x + this.size > canvas.width || this.x - this.size < 0){
        this.directionsX = -this.directionsX;
    }
    if(this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }

    this.x += this.directionsX;
    this.y += this.directionY


    this.draw()
}
//create particle array

function init() {
    particleArray = []
    for (let i=0; i<100; i++){
        let size = Math.random() * 20;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let directionsX = (Math.random() * .4) - .2;
        let directionsY = (Math.random() * .4) - .2;
        let color = 'white';

        particleArray.push(new Particle(x, y, directionsX, directionsY, size, color));
    }
}
// animation loop
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth, innerHeight);

    for (let i=0; i<particleArray.length; i++){
        particleArray[i].update();
    }
}
init();
animate();

window.addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})