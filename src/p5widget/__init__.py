from pathlib import Path

import anywidget
import traitlets


class P5Widget(anywidget.AnyWidget):
    _esm = Path(__file__).parent / "p5widget.js"
    sketch = traitlets.Unicode("").tag(sync=True)

    @classmethod
    def from_file(cls, sketch_filename: str, *args, **kwargs) -> "P5Widget":
        """
        Experiment with:
        async function load_esm(esm) {
            if (is_href(esm)) {
                return await import(esm);
            }
            let url = URL.createObjectURL(new Blob([esm], { type: "text/javascript" }));
            let mod = await import(url);
            URL.revokeObjectURL(url);
            return mod;
        }
        """
        sketch_file = Path(sketch_filename)
        if not (sketch_file.is_file() and sketch_file.exists()):
            raise FileNotFoundError

        return cls(sketch=sketch_file.read_text(), *args, **kwargs)
