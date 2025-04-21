import p5 from './p5-1.11.5.mjs';

async function loadSketch(sketchContent) {
    const url = URL.createObjectURL(new Blob([sketchContent], { type: "text/javascript" }));
    try {
        const mod = await import(url);

        if (!mod || typeof mod !== 'object' || typeof mod.default !== 'function') {
            return "Exported default must be a function or class.";
        }
        return mod.default;
    } catch (error) {
        console.log(error);
        return `Fail loading sketch: ${error?.message || error.toString()}`;
    } finally {
        URL.revokeObjectURL(url);
    }
}

async function render({ model, el }) {
    const wrapper = document.createElement("div");
    wrapper.id = "p5-widget-wrapper";

    const _addError = (message) => {
        let p = document.createElement("p");
        p.innerText = `Error: ${message}`;
        wrapper.append(p);
    };

    let sketchContent = model.get("sketch").trim();
    let sketchClass = await loadSketch(sketchContent);

    if (typeof sketchClass !== "function") {
        _addError(sketchClass);
    }
    else {
        try {
            new p5((p) => new sketchClass(p), wrapper);
        }
        catch(error) {
            _addError(error);
            console.log(error);
        }
    }

    el.appendChild(wrapper);
};

export default { render };
