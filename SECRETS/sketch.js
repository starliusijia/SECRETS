// function preload() {
//   secrets=loadStrings('words.txt');
// }
function setup() {
  createCanvas(1280, 1120);
  //background(0);
  input = createInput();
  input.position(520, 140);
  button = createButton('submit');
  button.position(input.x + input.width+10, 140);
  button.mousePressed(draw);
  noStroke();
  frameRate(5);
  
}

function greet() {
  input.value('');
}

function draw() {
    fill(255,255,255,100);
  rect(0,0,1280,200);
  var secrets = input.value();
//  secrets= ["SEX HARASSMENT",
// "RELATIVES",
// "UNCLE-IN-LAW",
// "LESBIAN",
// "GIRLS",
// "LOVE",
// "GAY",
// "COMING-OUT",
// "FRIEND",
// "MALE",
// "BESTIES",
// "MISS",
// "EX",
// "BOYFRIEND",
// "GIRLFRIEND",
// "EXPECTATION",
// "FANTASY",
// "MAGIC",
// "RICH",
// "GRANDPA",
// "REGRETION",
// "DREAM",
// "LYRICWRITER",
// "CONTROL-FREEK",
// "MOM",
// "REJECTION",
// "RELIVE",
// "UGLY",
// "PUBERTY",
// "ADOLESCENCE",
// "DATE",
// "KISS",
// "PREGNANT",
// "VIRGIN",
// "SUICIDE",
// "FIRST-LOVE",
// "DORM",
// "LITTLEPRINCE",
// "FICTION",
// "BULLYING",
// "SCHOOL",
// "POSSESSIVE",
// "COUPLE",
// "ILLNESS",
// "5-YEARS",
// "NOTHING"
// ]
  fill(0);
  textSize(20);
 text('INPUT YOUR SECRET HERE',480,100);
 fill(0,0,0,50);
 rect(0,200,1280,920);
 fill(255);
 textSize(random(100));
  var i= int (random (44));
 text(secrets[i], random(1280), random(300,1120));
  
}