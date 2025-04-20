// import p5 from './p5-2.0.0.mjs';
import p5 from './p5-1.11.5.mjs';

function render({ model, el }) {
    const wrapper = document.createElement("div");

    let sketch_content = model.get("sketch").trim();
    if (!sketch_content.startsWith("return")) {
        sketch_content = "return " + sketch_content;
    }

    let sketch = new Function(sketch_content)();

    const app = new p5((p) => new sketch(p), wrapper);

    // TODO: investigate
    if (app.canvas.dataset.hidden === 'true') {
        app.canvas.style.visibility = '';
    }

    el.appendChild(wrapper);
};

export default { render };
