const bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    bubbles.push(new Bubble(100 + i * 100, 200, 20));
  }
}

function draw() {
  background(0);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
}

function mouseClicked() {
  // ...
}

/* Del 1 */

/* Øvelse 1.1
Udvid programmet, så når der klikkes på en bobel forsvinder den.
Når der klikkes med musen skal følgende ske. */

// 1. Find musens placering
// 2. Gennemløb alle boblerne og se om musen er indenfor deres areal
// 3. Såfremt overstående er tilfældet, fjern boblen/boblerne fra array'ed efter at det er gennemløber.

function mouseClicked() {
  console.log(mouseX, mouseY);
  for (let i = 0; i < bubbles.length; i++) {
    let d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
    let r = bubbles[i].r;
    if (d <= r) {
      bubbles.splice(i, 1);
      console.log("Removed Bubble!");
      console.log("Remaining Bubbles: " + bubbles.length)
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    let i = int(random(1, 3))
    bubbles.push(new Bubble(100 + i * 100, 200, 20))
    console.log("Added Bubble " + "New Total: " + bubbles.length + " Bubbles")
  }
}

/* Øvelse 1.2
Udvid programmet, så ved klik på "mellemrum" laves en ny bubble et tilfældigt sted på skærmen */
// 1. Undersøg keyPressed funktionen https://p5js.org/reference/#/p5/keyPressed samt https://p5js.org/reference/#/p5/keyCode
// 2. Brug keyPressed i kombination med keyCode til at skrive en funktion der finder ud af hvilken knap der trykkes på.
// 3. Hvis der trykkes "mellemrum" lav en ny tilfældig bubble og tilføj den til arrayed.

/* Del 2 */

/* Øvelse 2.1
Lav getters og setters for alle variabler i Bubble.js. Sørg for alle nu bruger de nye getters og setters i stedet.*/

/* Del 3 */

/* Øvelse 3.1
Implementer klasserne Cicle og Ball som vist i eksemplet.*/

/* Øvelse 3.2
Lav Bubble en subclass af Circle og ændrer ting i Bubble accordingly. */

/* Øvelse 3.3
Lav en ny subclass af Circle, kaldet Balloon, som i stedet bevæger sig ved at stige til vejrs. Få evt. inspiration til move() ved at se hvordan Ball bevæger sig.*/

/* Øvelse 3.4
Modificer implementationerne lavet i 1.1 og 1.2 til nu at gælde for alle subklasser af Circle. (Ball, Bubble og Balloon)*/

/* Øvelse 3.5
Undersøg funktionen millis() https://p5js.org/reference/#/p5/millis, i p5js og brug den til at implementerer at der kommer en ny tilfældig Circle på skærmen hver 5 sekunder der går. */
// evt se http://learn.digitalharbor.org/courses/creative-programming/lessons/using-timers-in-p5-js/
