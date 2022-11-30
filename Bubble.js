class Bubble {
    constructor(x, y, r) {
      this.x = x
      this.y = y
      this.r = r
    }
    
    display() {
      stroke(255)
      strokeWeight(4)
      noFill()
      ellipse(this.x, this.y, this.r*2)
    }
    
    move() {
      if (this.x < width && this.y < height) {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
      }
    }
  }