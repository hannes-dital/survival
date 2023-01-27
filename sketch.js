let windowHeight = 1080;
let windowWidth = 1920;

// starting point of x.
let x = windowWidth / 2;
// starting point of y.
let y = windowHeight / 2;

let slider;
let target;
let radius = 150;
let angle = 0;
let speed = 0.05;
let vehicle;
let player;
let health;
let kills = 0;
let nr = 1;

let circles = [];
let vehicles = [];

let side = ["left", "right", "top", "bottom"];

function addVehicle() {
  let randomSide = random(side);

  let randomX;
  let randomY;

  switch (randomSide) {
    case "top":
      randomY = random(-20, 0);
      randomX = random(-10, 2100);
      break;
    case "bottom":
      randomY = random(1080, 1100);
      randomX = random(-10, 2100);
      break;
    case "left":
      randomY = random(-10, 1100);
      randomX = random(-10, 0);
      break;
    case "right":
      randomY = random(-10, 1100);
      randomX = random(1920, 1940);
    default:
      break;
  }

  vehicles.push(new Vehicle(randomX, randomY));
}

function setup() {
  createCanvas(1920, 1080);
  rectMode(CENTER);

  player = new Player(x, y);
  health = new PlayerHealth();
  //circles.push(new Circle(100, 100, 50, 0.03));

  for (let i = 0; i < 10; i++) {
    addVehicle();
  }

  setInterval(() => {
    for (let i = 0; i < nr; i++) {
      addVehicle();
    }
    player.update();
  }, 500);

  setInterval(() => {
    nr++;
  }, 5000);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}

function draw() {
  background(200);

  target = createVector(mouseX, mouseY);
  for (let i = vehicles.length - 1; i >= 0; i--) {
    vehicles[i].collision(player);

    if (vehicles[i].health < 0) {
      vehicles.splice(i, 1);
      kills++;
    } else {
      vehicles[i].seek(target);
      vehicles[i].update();
      vehicles[i].show();
    }
  }

  // if the left arrow key is held down, move the circle to the       // left.
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }

  // if the right arrow key is held down, move the circle to the       // right.
  else if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }

  // if the up arrow key is held down, move the circle up.
  else if (keyIsDown(UP_ARROW)) {
    y = y - 5;
  }

  // if the down arrow key is held down, move the circle down.
  else if (keyIsDown(DOWN_ARROW)) {
    y = y + 5;
  }

  player.draw();

  circles.forEach((circle) => circle.draw());

  //   fill("green");
  //   translate(player.x, player.y);
  //   rotate(angle);
  //   ellipse(radius, 0, 30, 30);

  //   angle = angle + speed;

  health.draw();

  text(`Nr of enemies ${vehicles.length}`, 50, 50);
  text(`Nr of kills ${kills}`, 50, 80);
}
