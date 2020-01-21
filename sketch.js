function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  // put drawing code here
  let red= map(mouseX,0,width, 180,255)
  let blue = map(mouseY,0,height, 180,255)

  background(red,210,blue);
  fill(0, 10);
  for(let i=0; i<50; i++){
  triangle(50*i,i-20,1000,i+400,i,i*i);
}
}