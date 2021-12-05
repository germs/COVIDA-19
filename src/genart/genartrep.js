const MAX_HEIGHT = window.innerHeight / 2;
const MAX_WIDTH = 2*window.innerWidth / 3;
const DENSITY = 8;
const GAP = MAX_HEIGHT / DENSITY;
const STROKE_COLOR = "#00203F";
function setup(){
  createCanvas(MAX_HEIGHT, MAX_WIDTH);
  stroke(STROKE_COLOR);
  noLoop();
}
function draw(){  
    const lines = [];
    let odd = false;
    for(let y = GAP / 2; y <= MAX_HEIGHT; y += GAP) {
        odd = !odd;
        const trait = [];
        const oddFactor = odd ? GAP/2 : 0;
        for(let x = GAP / 4; x <= MAX_HEIGHT; x += GAP) {
          trait.push({
            x: x + oddFactor,
            y: y
          });
        }
        lines.push(trait);
      }
    odd = true;
    for(let y = 0; y < lines.length - 1; y++) {
        odd = !odd;
        const dotLine = [];
        for(let i = 0; i < lines[y].length; i++) {
          dotLine.push(odd ? lines[y][i]   : lines[y+1][i]);
          dotLine.push(odd ? lines[y+1][i] : lines[y][i]);
        }
        for(let i = 0; i < dotLine.length - 2; i++) {
          triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y)
        }
      }
}

trait.push({
    x: x + (Math.random()*.8 - 0.4) * GAP + oddFactor,
    y: y + (Math.random()*.8 - 0.4) * GAP
});