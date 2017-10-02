/* Simple soft colors cycle */

// Constants
const TARGET_CONTAINER = 'sketch-container'
const IMG_PATH = '/assets/img/color_targets.jpg';
const MOVEMENT_SPEED = [0.05, 0.05];

// Model state
var IMG;
var CUR_PXLS = [];

// Init init
function preload() {
  IMG = loadImage(IMG_PATH);
}

// Init
function setup() {
  // Get div size and create canvas
  var canvas_div = document.getElementById(TARGET_CONTAINER);
  var width = canvas_div.offsetWidth;
  var canvas = createCanvas(width, windowHeight);
  canvas.parent(TARGET_CONTAINER);
  noStroke();

  // Random pxl start locs
  start_locs = new Uint8Array(16);
  window.crypto.getRandomValues(start_locs);
  for (var loc = 0; loc < 16; loc += 2) {
    console.log(start_locs[loc] / 255 * IMG.width);
    CUR_PXLS.push([start_locs[loc] / 255 * IMG.width, start_locs[loc+1] / 255 * IMG.height]);
  }
}

// Keep always full size
function windowResized() {
  setup();
}

function draw() {
  var box_width = windowWidth / 3;
  var box_height = windowHeight / 3;

  // Update pxl
  for (var loc = 0; loc < CUR_PXLS.length; loc++) {
      CUR_PXLS[loc][0] = (CUR_PXLS[loc][0] + MOVEMENT_SPEED[0]) % IMG.width;
      CUR_PXLS[loc][1] = (CUR_PXLS[loc][1] + MOVEMENT_SPEED[1]) % IMG.height;
      fill(IMG.get(int(CUR_PXLS[loc][0]), int(CUR_PXLS[loc][1])));
      var pos = loc;
      if (pos > 3) {
          pos++;
      }
      rect(pos % 3 * box_width, int(pos / 3) * box_height, box_width, box_height);
  }

  image(IMG, box_width, box_height, box_width, box_height);
}
