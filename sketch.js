function setup() {
  // put setup code here
  createCanvas(1200,700);
}

function draw() {
  // put drawing code here
  background(255,210,255);
  fill(0, 10);
  for(let i=0; i<50; i++){
  triangle(50*i,i-20,1000,i+400,i,i*i);
}
}