let introImg, mythImg, pouchImg, stardollImg, squishImg,kissimg;
let pon;
let soundPlayed = false; // Variable to track whether the sound has been played

let scene = 0;


function preload() {
  introImg = loadImage('fb.png');
  mythImg = loadImage('myth.jpg');
  pouchImg = loadImage('pouch.png');
  stardollImg = loadImage('stardoll.png');
  squishImg = loadImage('squish.jpg');
  kissimg = loadImage('kisslos.png');
  pon = loadSound('pon.m4a');



}


function setup() { createCanvas(600, 600);
  background(0);

}

function draw() {

  if (scene == 0) {
    drawScene0();
  } else if (scene == 1) {
    drawScene1();
  } else if (scene == 2) {
    drawScene2();
  } else if (scene == 16) {
    drawScene16();
  } else if (scene == 17) {
    drawScene17();
  
  } else if (scene == 4) {
    drawScene4();
  }
}

function drawScene0() {
  background(introImg);
  if (scene == 0) {
    fill(255, 105, 180); // Hot Pink color
    ellipse(100, 270, 20, 20);
    ellipse(175, 175, 20, 20);
    ellipse(500, 75, 20, 20);
    ellipse(310, 400, 20, 20);
    fill(0);
    textAlign(CENTER, CENTER); // Center the text within the circles

    text("1", 100, 270);
    text("2", 175, 175);
    text("3", 500, 75);
    text("4", 310, 400);
  }
}

function drawScene1() {
  background(pouchImg);
  if (scene == 1) {
    fill(255, 105, 180); // Hot Pink color
    //ellipse(470, 530, 20, 20);
    ellipse(50, 350, 20, 20);
    //ellipse(255, 260, 20, 20);
  }
}

function drawScene2() {
  background(mythImg);
  if (scene == 2) {
    fill(255, 105, 180); // Hot Pink color
    //ellipse(470, 530, 20, 20);
    ellipse(50, 350, 20, 20);
    //ellipse(255, 260, 20, 20);
  }
}


function drawScene16() {
  background(stardollImg);
  if (scene == 16) {
    fill(255, 105, 180); // Hot Pink color
    ellipse(320, 320, 20, 20);
    ellipse(75, 500, 20, 20);
  }
}

function drawScene17() {
  background(squishImg);
  if (scene == 17) {
    fill(255, 105, 180); // Hot Pink color
    ellipse(75, 525, 20, 20);
  }
}

function drawScene4() {
  background(kissimg);
  if (scene == 4) {
    fill(255, 182, 193); // Light Pink color
    ellipse(75, 525, 20, 20);
  }
}

function mousePressed() {
  if (scene == 0 && !soundPlayed) {
    // Play the sound only if it hasn't been played before
    pon.play();
    soundPlayed = true; // Set the flag to true
  }
  if (scene == 0) {
    if (overCircle(500, 75, 20)) {
      scene = 1;
    } else if (overCircle(100, 270, 20)) {
      scene = 16;
    } else if (overCircle(175, 175, 20)) {
      scene = 2;
    } else if (overCircle(310, 400, 20)) {
      scene = 4;
    }
  } else if (scene == 4) {
    if (overCircle(75, 525, 20)) {
      scene = 0;
    }
  } else if (scene == 1) {
    if (overCircle(50, 350, 20)) {
      scene = 0;
    }
  } else if (scene == 2) {
    if (overCircle(50, 350, 20)) {
      scene = 0;
    }
  } else if (scene == 16) {
    if (overCircle(75, 500, 20)) {
      scene = 0;
    } else if (overCircle(320, 320, 20)) {
      scene = 17;
    }
  } else if (scene == 17) {
    if (overCircle(75, 525, 20)) {
      scene = 16;
    }
  }
}

function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }
}
function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }

}