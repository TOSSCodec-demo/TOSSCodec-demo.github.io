# TOSS-Codec Demo Page

Demo page for TOSS-Codec: low-bitrate streaming neural audio codec with Temporal Offset Supervision.

This repository contains a static GitHub Pages-style demo page based on the paper "TOSS: Temporal Offset Supervision for Low-Bitrate Streaming Audio Codecs on Mobile Devices".

## Preview locally

From this repository root:

```bash
python3 -m http.server 8000
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
