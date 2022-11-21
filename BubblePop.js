const bubbles = [];
let millisecond = 0
let g = 1


function preload() {
  parrot = loadImage("images/dancingParrot.gif")
  bubblePop = loadSound("sounds/bubblePop.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  millisecond = millis()

  for (let i = 0; i < 10; i++) {
    bubbles.push(new Bubble(50 + i * 100, height/2, 20));
  }
}

function draw() {
  background(0);
  UI();
  millisecond = millis();
  //Auto Bubble Spawner
  if(millisecond >= 5000*g) {
    let i = random(15)
    g = g + 1
    bubbles.push(new Bubble(50 + i * 100, height/2, 20));
    console.log("Added New Bubble")
    return g
  }
  //Bubble Hold to Spawn
  if (keyIsPressed === true && keyCode == 81){
    let i = random(18)
    bubbles.push(new Bubble(50 + i * 100, height/2, 20));
  }

  //Bubble Move
  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
}

function mouseClicked() {
  for (let i = 0; i < bubbles.length; i++) {
    let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
    let r = bubbles[i].r;
    if (d <= r) {
      bubbles.splice(i, 1);
      //Plays Pop Sound
      bubblePop.play()
      console.log("Popped Bubble!");
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    let i = random(18)
    bubbles.push(new Bubble(50 + i * 100, height/2, 20));
    console.log("Added Bubble " + "New Total: " + bubbles.length + " Bubbles")
  }
}

function UI() {
  noStroke()
  fill(255, 255, 255)
  dancingParrot()
  text("Bubbles Count: " + bubbles.length,10, 20)
  text("Controls: \nLeft Click to Pop\nSpacebar: Spawn 1 Bubble\nQ: Spawn Bubbles Fast", 10, 40)
}

function dancingParrot() {
  imageMode(CENTER)
  image(parrot, width - 50, height - 50, 75, 75)
  text("Made By: @LucasFromDK on Github", width/2, height - 10)
}