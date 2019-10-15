var factotum;
var pizzaa;
var volhistory = [];
var inc = 800;

function preload(){
  factotum = loadSound("./assets/largoalfactotum.mp3"); // sound taken from https://www.audionetwork.com/ with a free trial subscription
  pizzaa = loadImage("./assets/rossini.png"); //pic taken by l'ex della mia coinquilina
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  factotum.play();
  factotum.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(factotum);
}

function draw() {
  volume = analyzer.getLevel();
  volume1 = map(volume, 0.5, 1.5, 0.5, height);
  volhistory.push(volume);

  background('#6d1514');

//Explanations (probably it is the dumbiest way to do a multilenear text)
  textFont("Poppins");
  textAlign (LEFT)
  textSize(15);
  fill('#fcc143');
  noStroke();

  var myText1 = "Pesaro is a charming coastal town in the Marche region.";
  text(myText1, 30, 40);
  var myText2 = "Known for being the city of cycling, music and no-vax,";
  text(myText2, 30, 60);
  var myText3 = "Pesaro is the birthplace of Giocchino Rossini and of the pizza";
  text(myText3, 30, 80);
  var myText4 = "dedicated to him: Rossini.";
  text(myText4, 30, 100);
  var myText5 = "Nightmare of every Neapolitan, this pizza is composed of";
  text(myText5, 30, 140);
  var myText6 = "a base of margherita with hard-boiled eggs and mayonese";
  text(myText6, 30, 160);
  var myText6 = "added after cooking.";
  text(myText6, 30, 180);
  var myText7 = "Eaten at any time of the day, Rossini can be found in the streets";
  text(myText7, 30, 220);
  var myText8 = "of the city in every format: here in the breakfast one.";
  text(myText8, 30, 240);

//Mayonese
  strokeWeight(3);
  stroke('#ebd9a7');
  noFill();
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
  var y = map(volhistory[i], 0, 2, 0, inc);
  vertex(i, y + 350);
  if (volhistory.length > width) {
  volhistory = [];
    }
  }
  endShape();

//Rossini
  imageMode(CENTER);
  image(pizzaa, width/2, height/2, volume1, volume1);
}
