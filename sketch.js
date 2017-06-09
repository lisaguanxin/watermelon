var catcher;

function setup() {
    createCanvas(640, 480);
    catcher = new Catcher(32);
}

function draw() {
    background(255);
    catcher.setLocation(mouseX, mouseY);
    catcher.display();
}

//catcher class
function Catcher(tempR) {
    this.r = tempR;
    this.x = 0;
    this.y = 0;

    this.setLocation = function (tempX, tempY) {
        this.x = tempX;
        this.y = tempY;
    }

    this.display = function () {
        stroke(0);
        fill(175);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

}