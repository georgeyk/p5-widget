

import marimo

__generated_with = "0.13.0"
app = marimo.App(width="medium")


@app.cell
def _(mo):
    mo.md(
        r"""
        # p5 widget demo

        Click to change colors!
        """
    )
    return


@app.cell
def _():
    import marimo as mo
    from p5widget import P5Widget
    return P5Widget, mo


@app.cell
def _():
    sketch = """
        export default class Sketch {
          constructor(p) {
            this.p = p;
            this.color = 255;

            p.setup = () => this.setup();
            p.draw = () => this.draw();
            p.mousePressed = () => this.mousePressed();
          }

          setup() {
            this.p.createCanvas(400, 400);
            this.p.background(50);
            this.color = 255;
          }

          draw() {
            const p = this.p;
            p.fill(this.color);
            p.circle(p.mouseX, p.mouseY, 50);
          }

          mousePressed() {
              this.color = [this.p.random(255), this.p.random(255), this.p.random(255)];
          }
    }
    """
    return (sketch,)


@app.cell
def _(P5Widget, mo, sketch):
    sk1 = mo.ui.anywidget(P5Widget(sketch=sketch))
    mo.ui.anywidget(sk1)
    return


if __name__ == "__main__":
    app.run()
