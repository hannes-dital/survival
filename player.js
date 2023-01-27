class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.auraRadius = 100;
  }

  draw() {
    this.x = mouseX;
    this.y = mouseY;
    fill("purple");
    ellipse(this.x, this.y, this.r * 2);

    this.aura();
  }

  aura() {
    fill(0, 0, 0, 50);
    ellipse(player.x, player.y, this.auraRadius * 2);
  }

  update() {
    this.auraRadius += 0.5;
  }
}
