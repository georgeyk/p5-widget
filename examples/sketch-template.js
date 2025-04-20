class Sketch {
  constructor(p) {
    p.setup = () => this.setup();
    p.draw = () => this.draw();
    this.p = p;
  }

  setup() {}

  draw() {}
};
