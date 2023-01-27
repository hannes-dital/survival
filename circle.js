class Circle {
  constructor(x, y, r, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
  }

  draw() {
    fill("green");
    ellipse(this.x, this.y, this.r, this.r);
  }
}
