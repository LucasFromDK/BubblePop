class Bubble {
  constructor(x, y, r = 20, c = color(0, 0, 0, 0)) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  display() {
    stroke(255);
    strokeWeight(4);
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  
    if (this.x < 0) {
      this.x = this.x + this.r;
    }
    if (this.y < 0) {
      this.y = this.y + this.r;
    }
    if (this.x >= width) {
      this.x = this.x - this.r;
    }
    if (this.y >= height) {
      this.y = this.y - this.r;
    }
  }

  changeColor(color) {
    this.c = color;
  }

  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other.y);

    return distance <= this.r + other.r;
  }
}