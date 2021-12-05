const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;
const STEP = 16;
function setup(){
  createCanvas(MAX_HEIGHT, MAX_WIDTH);
  stroke(169, 251, 215);
  strokeWeight(2);
  noLoop();
}
function draw(){  
    const lines = [];
    for(let i = STEP; i < MAX_HEIGHT - STEP; i += STEP){
      lines.push([{x: STEP, y: i}, {x: MAX_HEIGHT, y: i}]);
    }
    
    // draw
    for(let i = 0; i < lines.length; i++){
      for(let j = 0; j < lines[i].length; j+=2){
        line(lines[i][j].x, lines[i][j].y, lines[i][j+1].x, lines[i][j+1].y);
      }
    }
}

let distanceToCenter = Math.abs(j - MAX_HEIGHT / 2);
let variance = Math.max(MAX_HEIGHT / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
let random = Math.random() * variance / 2 * -1;
let point = {x: j, y: i + random};
line.push(point);

const MONOCHROME = [[0, 32, 63]];
const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
const random_index = Math.floor(Math.random() * TONES_1.length);
const [r, g, b] = TONES_1[random_index];
fill(r, g, b);