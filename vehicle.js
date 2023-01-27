class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 4;
    this.maxForce = 0.25;
    this.r = 16;
    this.magnitude = 1;
    this.health = 50;
    this.maxHealth = 50;
    this.white = 255;
    this.red = "red";
    this.color = 255;
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.magnitude);
    force.sub(this.vel);
    force.limit(this.magnitude);
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.color);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();
  }

  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  collision(player) {
    var d = dist(this.pos.x, this.pos.y, player.x, player.y);

    if (d < this.r + player.auraRadius) {
      console.log("d", d, player.auraRadius, this.r);
      this.color = "red";
      this.health--;
      console.log("Collision detected...", this.r + player.auraRadius, d);
    } else {
      if (this.health < this.maxHealth) {
        this.color = "green";
      } else this.color = 255;
    }
  }
}
