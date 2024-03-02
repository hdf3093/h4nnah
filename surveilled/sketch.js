let ourvid;
let webcamOn = false;
let toggleButton;
let startButton;
let moreOptionsButton;
let openMirrorButton;
let clickCount = 0;
let audio;

let faceTracker;
let wiredNoisesVolume = .4;
let sonicpivolume = .8
function preload() {
  audio = loadSound('sonicpicode.wav');
  audio2 = loadSound('camera.mp3');
  audio3 = loadSound('wirednoises.m4a');
  audio3.setVolume(wiredNoisesVolume);
  audio.setVolume(sonicpivolume);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  toggleButton = createButton('hello');
  toggleButton.size(80, 50);
  toggleButton.position(width / 2 - toggleButton.width / 2, 430);
  toggleButton.hide();
  toggleButton.mousePressed(toggleWebcam);

  startButton = createButton('START');
  startButton.position(width / 2 - 50, height / 2);
  startButton.mousePressed(startInteraction);

  moreOptionsButton = createButton('More Options');
  moreOptionsButton.size(120, 50);
  moreOptionsButton.position(width / 2 - moreOptionsButton.width / 2, 500);
  moreOptionsButton.hide();
  moreOptionsButton.mousePressed(moreOptions);

  openMirrorButton = createButton('can you see me?');
  openMirrorButton.size(100, 50);
  openMirrorButton.position(width / 2 - openMirrorButton.width / 2, 500);
  openMirrorButton.hide();
  openMirrorButton.mousePressed(toggleWebcam);

  ourvid = createCapture(VIDEO);
  ourvid.hide();

  // Initialize face tracker
  faceTracker = new clm.tracker();
  faceTracker.init();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(1000);

  if (webcamOn) {
    const gridSize = 14;
    const cellSize = 100;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = i * cellSize + 20;
        const y = j * cellSize + 20;

        image(ourvid, x, y, cellSize, cellSize);

        const positions = faceTracker.getCurrentPosition();

        if (positions) {
          drawFace(positions, x, y, cellSize, cellSize);
          drawFace(positions, x + 20, y + 20, cellSize, cellSize); 
          drawFace(positions, x - 20, y - 20, cellSize, cellSize); 
        }
      }
    }
  }
}

function drawFace(positions, x, y, w, h) {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < positions.length; i++) {
    const px = map(positions[i][0], 0, ourvid.width, x, x + w);
    const py = map(positions[i][1], 0, ourvid.height, y, y + h);
    vertex(px, py);
  }
  endShape(CLOSE);
}

function toggleWebcam() {
  webcamOn = !webcamOn;

  openMirrorButton.html(webcamOn ? 'goodbye' : 'hello');

  if (webcamOn) {
    ourvid.show();
    faceTracker.start(ourvid.elt);
  } else {
    ourvid.hide();
    startButton.hide();
    faceTracker.stop();
  }
}

function startInteraction() {
  if (clickCount === 0) {
    audio.play();
    audio2.play();
    audio3.play();
  }

  clickCount++;

  switch (clickCount) {
    case 1:
      startButton.html('what bothers you more?');
      break;
    case 2:
      startButton.html('the symbiosis of your body and machine,');
      break;
    case 3:
      startButton.html('or the one above you, surveilling, learning, orchestrating?');
      break;
    case 4:
      startButton.hide();
      openMirrorButton.show();
      break;
    default:
      clickCount = 0;
      startButton.show();
      toggleButton.hide();
      moreOptionsButton.hide();
      openMirrorButton.hide();
      startButton.html('START');
      break;
  }
}

function moreOptions() {
  switch (moreOptionsButton.html()) {
    case 'More Options':
      moreOptionsButton.html('the aid from the robot,');
      break;
    case 'the aid from the robot,':
      moreOptionsButton.html('or the human on the other end of it surveilling us?');
      break;
    case 'or the human on the other end of it surveilling us?':
      moreOptionsButton.hide();
      clickCount = 0;
      startButton.show();
      openMirrorButton.hide();
      startButton.html('START');
      break;
    default:
      break;
  }
}
