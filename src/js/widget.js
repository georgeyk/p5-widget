import p5 from './p5-1.11.5.mjs';

function render({ model, el }) {
    const wrapper = document.createElement("div");
    wrapper.id = "p5-widget-wrapper";

    let sketchContent = model.get("sketch").trim();
    if (!sketchContent.startsWith("return")) {
        sketchContent = "return " + sketchContent;
    }

    let sketchClass = new Function(sketchContent)();
    const sketch = new p5((p) => new sketchClass(p), wrapper);

    // TODO: investigate
    if (sketch.canvas.dataset.hidden === 'true') {
        sketch.canvas.style.visibility = '';
    }

    el.appendChild(wrapper);
};

export default { render };
