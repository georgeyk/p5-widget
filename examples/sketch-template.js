export default class Sketch {
  constructor(p) {
    this.p = p;
    p.setup = () => this.setup();
    p.draw = () => this.draw();
  }

  setup() {}

  draw() {}
};


// To use the same code in OpenProcessing or p5.js web editor, remove the
// "export default" and include the line below:
// A live example: https://openprocessing.org/sketch/2621579
// new p5((p) => Sketch(p));
