//Block Object
class Block{

    constructor(x,y,width,height,speedX,speedY){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 5;
    this.speedY = 5;
    }

    display() {
        fill(blockcolor);
        rect(this.x,this.y,this.width,this.height);
    }

    move(){
        this.x = this.x + this.speedX
        if (this.x > (windowWidth - this.width) || this.x <= 0){
        this.speedX = this.speedX*-1
        }
    }
}

let blocks = [];
let numBlocks = 800;
for (i = 0; i < numBlocks ; i++)
    blocks[i] = new Block(i*10,i*20,i*20,i*20,i*20,500)

function keyPressed(){
    if (keyCode === 65) {
        console.log('key pressed is A')
        keyValue = color(175, 100, 220);
        blockcolor = 'yellow'
    }
    if (keyCode === 83) {
        console.log('key pressed is S')
        keyValue = color(255, 204, 0);
        blockcolor = 'red'
    }
    if (keyCode === 37) {
        console.log('key pressed is LEFT_ARROW')
        keyValue = color('rgb(0,0,255)');
        blockcolor = 'magenta'
    }
    if (keyCode === 39) {
        console.log('key pressed is RIGHT_ARROW')
        keyValue = color('#0f0');
        blockcolor = 'blue'
    }
    if (keyCode === 38) {
        console.log('key pressed is ARROW_UP')
        keyValue = color('magenta');
        blockcolor = 'green'
    }
}

/*else {
    console.log('key released');
    keyValue = 0;
} */

keyValue = 0
blockcolor = 255

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    strokeWeight(4);
background(keyValue);
for (i = 0; i <numBlocks; i++){
blocks[i].display();
blocks[i].move();
}

}


