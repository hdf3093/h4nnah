const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
let video;
let asciiDiv;
let isVideoPlaying = false;
let button;

function setup() {
  noCanvas();
  

  
  // Create a video capture
  video = createCapture(VIDEO);
  video.size(64, 48);
  
   // Create a button to start/stop the video
  button = createButton('Enter Portal');
  button.mousePressed(toggleVideo);
  button.position(90, 20);

  
  // Create a div to display ASCII video
  asciiDiv = createDiv();
}

function draw() {
  if (isVideoPlaying) {
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
      for (let i = 0; i < video.width; i++) {
        const pixelIndex = (i + j * video.width) * 4;
        const r = video.pixels[pixelIndex + 0];
        const g = video.pixels[pixelIndex + 1];
        const b = video.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, 0, len));
        const c = density.charAt(charIndex);
        if (c == " ") asciiImage += "&nbsp;";
        else asciiImage += c;
      }
      asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);
  }
}

function toggleVideo() {
  isVideoPlaying = !isVideoPlaying;
  if (isVideoPlaying) {
    video.play();
    button.html('Exit Portal');
  } else {
    video.pause();
    button.html('Enter Portal');
    clearAscii(); // Clear the ASCII display when stopping the video
  }
}

function clearAscii() {
  asciiDiv.html(""); // Clear the ASCII display
}
