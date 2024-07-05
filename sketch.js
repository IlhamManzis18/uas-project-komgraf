

function setup() {
  createCanvas(1350, 550, WEBGL);
  
}

function draw() {
  background('rgba(0, 255, 0, 0.25)');
  orbitControl();
  let angle = frameCount * 0.01;
  rotateY(angle);

  
  
 
  //
  lights();
  noStroke();
  fill('red');
  sphere(10);
  translate(30, 0, 0);
  fill('blue');
  sphere(10);


//saveFrames
  let r = frameCount % 255;
  let g = 50;
  let b = 100;
  background(r, g, b);
//garisTebal
  stroke('#222222');
  strokeWeight(4);
  //color
    ambientLight("red")

  //saveGIF
  let c = frameCount % 255;
  fill(c);
 
  
//3D
  cone(200);
  
  
}
//saveFrames
function keyPressed() {
  if (key === 's') {
    saveFrames('frame', 'png', 1, 5);
  }
}



