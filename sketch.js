var catcher;
var drops;
var timer;
var totalDrops = 0;


function setup() {
    createCanvas(640, 480); //create a canvas
    catcher = new Catcher(32); //create catcher with a radius of 32
    drops = new Drop(640, 480)[1000]; //create 1000 spots in the array ?????
    timer = new Timer(300);
    timer.start(); //starting the timer
}

function draw() {
    background(255);
    catcher.setLocation(mouseX, mouseY);
    catcher.display();

    //check the timer
    if (timer.isFinished()) {
        //deal with raindrops
        //initialize one drop
        drops[totalDrops] = new Drop();
        //increment totalDrops
        totalDrops++;
        //if we hit the end of the array
        if (totalDrops >= drops.length) {
            totalDrops = 0; //start over
        }
        timer.start();
    }

    // Move and display all drops
    for (i = 0; i < totalDrops; i++) {
        drops[i].move();
        drops[i].display();
        if (catcher.intersect(drops[i])) {
            drops[i].caught();
        }
    }
}

//catcher class
function Catcher(tempR) {
    this.r = tempR;
    this.x = 0;
    this.y = 0;

    this.setLocation = function(tempX, tempY) {
        this.x = tempX;
        this.y = tempY;
    };

    this.display = function() {
        stroke(0);
        fill(175);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
}


function Drop(width, height) {
    this.width = width;
    this.height = height;
    this.r = 8; // All raindrops are the same size
    this.x = random(this.width); // Start with a random x location
    this.y = -this.r * 4; // Start a little above the window
    this.speed = random(1, 5); // Pick a random speed
    this.c = color(50, 100, 150); // Color

    // Move the raindrop down
    function move() {
        // Increment by speed
        this.y += this.speed;
    }

    // Check if it hits the bottom
    function reachedBottom() {
        // If we go a little beyond the bottom
        if (this.y > this.height + this.r * 4) {
            return true;
        } else {
            return false;
        }
    }

    // Display the raindrop
    function display() {
        // Display the drop
        fill(this.c);
        noStroke();
        for (var i = 2; i < this.r; i++) {
            ellipse(this.x, this.y + i * 4, i * 2, i * 2);
        }
    }

    // If the drop is caught
    function caught() {
        // Stop it from moving by setting speed equal to zero
        this.speed = 0;
        // Set the location to somewhere way off-screen
        this.y = -1000;
    }
}

function Timer(tempTotalTime) {
    this.totalTime = tempTotalTime;

    this.start = function() {
        this.savedtime = millis(); //store the current time in milliseconds;
    };

    this.isFinished = function() {
        this.passedTime = millis() - this.savedTime;
        if (this.passedTime > this.totalTime) {
            return true;
        } else {
            return false;
        }
    };
}
