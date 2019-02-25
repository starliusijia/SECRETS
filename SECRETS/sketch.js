// function preload() {
//   secrets=loadStrings('words.txt');
// }
function setup() {
  createCanvas(2100, 1120);
  //background(0);
  input = createInput();
  input.position(640, 140);
  button = createButton('submit');
  button.position(input.x + input.width+10, 140);
  button.mousePressed(type);
  noStroke();
  frameRate(5);
  
}

function type() {
  input.value();
}

function draw() {
    fill(255,255,255,100);
  rect(0,0,2100,200);
  var secrets = input.value();
  fill(0);
  textSize(20);
 text('INPUT YOUR SECRET HERE',650,100);
 fill(0,0,0,50);
 rect(0,200,2100,920);
 fill(255);
 textSize(random(100));
  var i= int (random (44));
 text(secrets[i], random(2100), random(300,1120));
  
}
