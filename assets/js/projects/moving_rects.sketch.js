/* Simple rectangle movement */

// Constants
var GRID_SZ = 50;
var RECT_CFG = {long: GRID_SZ*2, short: GRID_SZ, clr: 0};
var FRAME_RATE = 60;
var ANMTN_CFG = {hz: 0.2,
                   rect_space: GRID_SZ*4,
                   distance: GRID_SZ / 2};
var FREQ = 0;  // Will be calculated later

// Model state
var rect_pos;
var frame_num;

// Init
function setup() {
  // Get div size and create canvas
  var div_name = 'sketch-container'
  var canvas_div = document.getElementById(div_name);
  var width = canvas_div.offsetWidth;
  var canvas = createCanvas(width, windowHeight);
  canvas.parent(div_name);

  noStroke();
  frameRate(FRAME_RATE);

  // Calculated const
  FREQ = ANMTN_CFG.hz / FRAME_RATE * TAU;

  // Setup rects
  calc_objs();

  fill(RECT_CFG.clr);
}

// Keep always full size
function windowResized() {
  setup();
}

function calc_objs() {
  // Calculate rectangle positions
  var num_rows = windowHeight / GRID_SZ;
  var num_cols = windowWidth / GRID_SZ;

  // Reset globals
  rect_pos = {vert: [], horz: []};
  frame_num = 0;

  for (var row = 0; row < num_rows; ++row) {
    for (var col = 0; col < num_cols; ++col) {

      // Even row, add horizontal block
      if (row % 2 === 0) {
        // Offset every other row
        if (row % 4 === 0) {
          rect_pos.horz.push({
            x: col * ANMTN_CFG.rect_space,
            y: row * GRID_SZ,
            move_left_row: true
          });
        } else {
          rect_pos.horz.push({
            x: col * ANMTN_CFG.rect_space + GRID_SZ,
            y: row * GRID_SZ,
            move_left_row: false
          });
        }
      }

      // Even columns add vertical blocks
      if (col % 2 === 0) {
        // Offset every other row
        if (col % 4 === 0) {
          rect_pos.vert.push({
            x: col * GRID_SZ,
            y: row * ANMTN_CFG.rect_space + GRID_SZ,
            move_down_col: true
          });
        } else {
          rect_pos.vert.push({
            x: col * GRID_SZ,
            y: row * ANMTN_CFG.rect_space,
            move_down_col: false
          });
        }
      }
    
    } // end for loop cols
  } // end for loop rows
}

function move_delta(frame_num) {
  return sin(frame_num * FREQ) * FREQ * ANMTN_CFG.distance;
}

function draw() {
  // Clear everything and redraw
  clear();

  // Draw rects
  for (var i = 0; i < rect_pos.horz.length; ++i) {
    rct = rect_pos.horz[i];
    rect(rct.x, rct.y, RECT_CFG.long, RECT_CFG.short);
    
    // Move rects alternating left/right
    if (rct.move_left_row) {
      rct.x -= move_delta(frame_num);
    } else {
      rct.x += move_delta(frame_num);
    }
  }

  for (var i = 0; i < rect_pos.vert.length; ++i) {
    rct = rect_pos.vert[i];
    rect(rct.x, rct.y, RECT_CFG.short, RECT_CFG.long);
    
    // Move rects alternating up or down
    if (rct.move_down_col) {
      rct.y += move_delta(frame_num);
    } else {
      rct.y -= move_delta(frame_num);
    }
  }

  // Update draw iteration
  frame_num += 1;
}
