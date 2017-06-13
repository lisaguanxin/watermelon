var catcher;
var drops;
var timer;
var totalDrops = 0;


function setup() {
    createCanvas(640, 480); //create a canvas
    this.catcher = new Catcher(32); //create catcher with a radius of 32
    this.drops = new Drop()[1000]; //create 1000 spots in the array ?????
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

//drop class
var x;
var y; // Variables for location of raindrop
var speed; // Speed of raindrop
var c;
var r; // Radius of raindrop

function Drop() {
    this.r = 8; // All raindrops are the same size
    this.x = random(width); // Start with a random x location
    this.y = -r * 4; // Start a little above the window
    this.speed = random(1, 5); // Pick a random speed
    this.c = color(50, 100, 150); // Color
}

// Move the raindrop down
function move() {
    // Increment by speed
    this.y += speed;
}

// Check if it hits the bottom
function reachedBottom() {
    // If we go a little beyond the bottom
    if (y > height + r * 4) {
        return true;
    } else {
        return false;
    }
}

// Display the raindrop
function display() {
    // Display the drop
    fill(c);
    noStroke();
    for (var i = 2; i < r; i++) {
        ellipse(x, y + i * 4, i * 2, i * 2);
    }
}

// If the drop is caught
function caught() {
    // Stop it from moving by setting speed equal to zero
    speed = 0;
    // Set the location to somewhere way off-screen
    y = -1000;
}
}

//timer class
var savedTime; //when timers started
var totalTime; //how long timer should last

funtion(tempTotalTime) {
    this.totalTime = tempTotalTime;
}

fuction start() {
    this.savedtime = millis(); //store the current time in milliseconds;
}

function isFinished() {
    var passedTime = millis() - savedTime;
    if (passedTime > totalTime) {
        return true;
    } else {
        return false;
    }
}
}









}
