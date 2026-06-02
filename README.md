# TOSS-Codec Demo Page

This directory contains a static GitHub Pages-style demo page.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8000 --directory demo
```

Then open `http://localhost:8000`.

## Replace audio samples

Edit `assets/js/demo-data.js` and place normalized WAV files under:

```text
assets/audio/3kbps/sampleXX/
assets/audio/6kbps/sampleXX/
assets/audio/model_family/sampleXX/
```

Recommended naming:

```text
gt.wav
encodec.wav
audiocodec.wav
lyra.wav
speechtokenizer.wav
dac.wav
ours_base.wav
ours_small.wav
ours_tiny.wav
```

Keep all systems for the same sample loudness-normalized and time-aligned.
