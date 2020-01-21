function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  // put drawing code here
  let red= map(mouseX,0,width, 180,255)
  let blue = map(mouseY,0,height, 180,255)
  let x=displayWidth

  background(red,210,blue);
  strokeWeight(0.8)
  fill(0, 10);
  //for(let move=0; move<50; move++){
  for(let i=0; i<50; i++){
  	x=x-0.05
  mouseX = map(mouseX,0,displayWidth,x,0)	
  triangle(50*i,i-20,mouseX*1.65,i+410,i,i*i);
	}
  
}  
