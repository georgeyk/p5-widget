from pathlib import Path

import anywidget
import traitlets


__version__ = "0.1.0"


class P5Widget(anywidget.AnyWidget):
    _esm = Path(__file__).parent / "p5widget.js"
    sketch = traitlets.Unicode("").tag(sync=True)

    def __init__(self, center=True, *args, **kwargs):
        if center:
            self._css = """
                #p5-widget-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            """.strip()

        super().__init__(*args, **kwargs)

    @classmethod
    def from_file(cls, sketch_filename: str, *args, **kwargs) -> "P5Widget":
        # check "try_file_contents"
        # https://github.com/manzt/anywidget/blob/main/anywidget/_util.py#L262
        sketch_file = Path(sketch_filename)
        if not (sketch_file.is_file() and sketch_file.exists()):
            raise FileNotFoundError

        return cls(sketch=sketch_file.read_text(), *args, **kwargs)
