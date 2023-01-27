class PlayerHealth {
  constructor() {
    this.health = 400;
    this.maxHealth = 400;
  }

  draw() {
    stroke(0);
    strokeWeight(4);
    noFill();
    rect(1920 / 2, 10, 200, 20);

    noStroke();
    fill(255, 0, 0);
    rect(1920 / 2, 10, map(this.health, 0, this.maxHealth, 0, 200), 20);
  }
}
