export default class Sketch {
  constructor(p) {
    p.setup = () => this.setup();
    p.draw = () => this.draw();
    p.mousePressed = () => this.mousePressed();
    this.p = p;
  }

  setup() {
    const p = this.p;
    this.color = [p.random(255), p.random(255), p.random(255)];
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
  }

  draw() {
    const p = this.p;
    p.background(30);
    p.translate(p.width / 2, p.height / 2);
    p.stroke(255);
    p.fill(p.color(this.color));
    p.ellipse(0, 0, 200, 200);
  }

  mousePressed() {
    this.color = [this.p.random(255), this.p.random(255), this.p.random(255)];
    console.log("clicked");
  }
};
