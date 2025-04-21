.PHONY: docs

docs:
	uv run marimo export html-wasm examples/demo.py --mode run --show-code -o docs
