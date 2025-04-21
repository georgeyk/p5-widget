export default class Sketch {
    constructor(p) {
        this.p = p;
        p.setup = () => this.setup();
        p.draw = () => this.draw();

        this.angle = 0;
    }

    setup() {
        this.p.createCanvas(400, 400)
    }

    draw() {
        let p = this.p;

        p.background(246, 244, 210);
        let a = p.map(p.noise(this.angle), 0, 1, 0, p.TWO_PI)
        this.compass(200, 200, 30, p.PI / a);
        this.angle += 0.003;
    }

    compass(cx, cy, size, angle) {
        let p = this.p;

        p.push();
        p.noStroke();

        p.translate(cx, cy);
        p.rotate(angle);

        p.fill(41, 50, 65);
        p.ellipse(0, 0, size * 4);

        // north
        p.fill(210, 108, 77);
        p.triangle(0, 0, -size, 0, 0, -size * 2);
        p.fill(250, 108, 77);
        p.triangle(0, 0, size, 0, 0, -size * 2);

        // south
        p.fill(152, 193, 250);
        p.triangle(0, 0, -size, 0, 0, size * 2);
        p.fill(152, 193, 210);
        p.triangle(0, 0, size, 0, 0, size * 2);
        p.pop();
    }
}
