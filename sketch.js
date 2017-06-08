
var catcher;
var Catcher;

function setup() {
createCanvas(640,480);
catcher = new Catcher(32);
}


function draw() {
var Catcher;
background(255);
catcher.setLocation(mousX,mouseY);
catcher.display();
}
