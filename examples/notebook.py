

import marimo

__generated_with = "0.13.0"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    from p5widget import P5Widget
    return P5Widget, mo


@app.cell
def _():
    sketch = """
        class Sketch {
          constructor(p) {
            this.color = null;
            p.setup = () => this.setup();
            p.draw = () => this.draw();
            p.mousePressed = () => this.mousePressed();
            this.p = p;
          }

          setup() {
            const p = this.p;
            this.mousePressed();
            p.createCanvas(400, 400);
            p.angleMode(p.DEGREES);

          }

          draw() {
            const p = this.p;

            p.translate(p.width / 2, p.height / 2);
            p.background(50);
            p.noStroke();
            p.fill(p.color(this.color));

            p.circle(0, 0, 100, 100);
            p.circle(50, -50, 75, 75);
            p.circle(-50, -50, 75, 75);
          }

          mousePressed() {
            this.color = [this.p.random(255), this.p.random(255), this.p.random(255)];
            console.log("clicked");
          }
        };
    """
    return (sketch,)


@app.cell
def _(P5Widget, mo, sketch):
    sk = P5Widget(sketch=sketch, center=True)
    mo.ui.anywidget(sk)
    return


if __name__ == "__main__":
    app.run()
