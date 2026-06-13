# TOSS-Codec Demo Page

Demo page for TOSS-Codec: a temporal-offset-supervised streaming audio codec for mobile devices.

This repository contains a static GitHub Pages-style demo page based on the paper "TOSS-Codec: A Temporal-Offset-Supervised Streaming Audio Codec for Mobile Devices".

## Preview locally

From this repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Repository structure

The static page is organized as:

```text
index.html
assets/css/style.css
assets/js/demo-data.js
assets/js/main.js
assets/img/
assets/audio/
```

Audio examples are grouped by bitrate and sample ID:

```text
assets/audio/3kbps/sample01/
assets/audio/6kbps/sample01/
```

All audio examples are intended to be loudness-normalized and time-aligned within each sample group.
