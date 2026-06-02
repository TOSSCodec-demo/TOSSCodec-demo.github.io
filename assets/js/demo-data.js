window.tossCodecDemoData = {
  threeKbps: {
    caption: "3 kbps audio comparison. Replace placeholder files with loudness-normalized WAVs.",
    columns: [
      { key: "gt", label: "Ground Truth" },
      { key: "encodec", label: "EnCodec" },
      { key: "audiocodec", label: "AudioCodec" },
      { key: "lyra", label: "Lyra" },
      { key: "speechTokenizer", label: "SpeechTokenizer" },
      { key: "dac", label: "DAC" },
      { key: "oursBase", label: "TOSS-Base", highlight: true }
    ],
    samples: [
      {
        id: "sample01",
        text: "Sample 1: clean speech sentence. Replace with transcript.",
        tags: ["clean", "seen language"],
        audio: {
          gt: "assets/audio/3kbps/sample01/gt.wav",
          encodec: "assets/audio/3kbps/sample01/encodec.wav",
          audiocodec: "assets/audio/3kbps/sample01/audiocodec.wav",
          lyra: "assets/audio/3kbps/sample01/lyra.wav",
          speechTokenizer: "assets/audio/3kbps/sample01/speechtokenizer.wav",
          dac: "assets/audio/3kbps/sample01/dac.wav",
          oursBase: "assets/audio/3kbps/sample01/ours_base.wav"
        }
      },
      {
        id: "sample02",
        text: "Sample 2: expressive or prosodically rich speech. Replace with transcript.",
        tags: ["expressive", "prosody"],
        audio: {
          gt: "assets/audio/3kbps/sample02/gt.wav",
          encodec: "assets/audio/3kbps/sample02/encodec.wav",
          audiocodec: "assets/audio/3kbps/sample02/audiocodec.wav",
          lyra: "assets/audio/3kbps/sample02/lyra.wav",
          speechTokenizer: "assets/audio/3kbps/sample02/speechtokenizer.wav",
          dac: "assets/audio/3kbps/sample02/dac.wav",
          oursBase: "assets/audio/3kbps/sample02/ours_base.wav"
        }
      },
      {
        id: "sample03",
        text: "Sample 3: challenging unseen speaker. Replace with transcript.",
        tags: ["unseen speaker"],
        audio: {
          gt: "assets/audio/3kbps/sample03/gt.wav",
          encodec: "assets/audio/3kbps/sample03/encodec.wav",
          audiocodec: "assets/audio/3kbps/sample03/audiocodec.wav",
          lyra: "assets/audio/3kbps/sample03/lyra.wav",
          speechTokenizer: "assets/audio/3kbps/sample03/speechtokenizer.wav",
          dac: "assets/audio/3kbps/sample03/dac.wav",
          oursBase: "assets/audio/3kbps/sample03/ours_base.wav"
        }
      }
    ]
  },
  sixKbps: {
    caption: "6 kbps audio comparison. Keep sample IDs aligned with the 3 kbps section when possible.",
    columns: [
      { key: "gt", label: "Ground Truth" },
      { key: "encodec", label: "EnCodec" },
      { key: "audiocodec", label: "AudioCodec" },
      { key: "lyra", label: "Lyra" },
      { key: "oursBase", label: "TOSS-Base", highlight: true }
    ],
    samples: [
      {
        id: "sample01",
        text: "Sample 1: clean speech sentence. Replace with transcript.",
        tags: ["clean", "6 kbps"],
        audio: {
          gt: "assets/audio/6kbps/sample01/gt.wav",
          encodec: "assets/audio/6kbps/sample01/encodec.wav",
          audiocodec: "assets/audio/6kbps/sample01/audiocodec.wav",
          lyra: "assets/audio/6kbps/sample01/lyra.wav",
          oursBase: "assets/audio/6kbps/sample01/ours_base.wav"
        }
      },
      {
        id: "sample02",
        text: "Sample 2: expressive or prosodically rich speech. Replace with transcript.",
        tags: ["expressive", "6 kbps"],
        audio: {
          gt: "assets/audio/6kbps/sample02/gt.wav",
          encodec: "assets/audio/6kbps/sample02/encodec.wav",
          audiocodec: "assets/audio/6kbps/sample02/audiocodec.wav",
          lyra: "assets/audio/6kbps/sample02/lyra.wav",
          oursBase: "assets/audio/6kbps/sample02/ours_base.wav"
        }
      },
      {
        id: "sample03",
        text: "Sample 3: challenging unseen speaker. Replace with transcript.",
        tags: ["unseen speaker", "6 kbps"],
        audio: {
          gt: "assets/audio/6kbps/sample03/gt.wav",
          encodec: "assets/audio/6kbps/sample03/encodec.wav",
          audiocodec: "assets/audio/6kbps/sample03/audiocodec.wav",
          lyra: "assets/audio/6kbps/sample03/lyra.wav",
          oursBase: "assets/audio/6kbps/sample03/ours_base.wav"
        }
      }
    ]
  },
  modelFamily: {
    caption: "TOSS-Codec model-family comparison. Use the same bitrate and offset for Tiny, Small, and Base.",
    columns: [
      { key: "gt", label: "Ground Truth" },
      { key: "oursTiny", label: "TOSS-Tiny" },
      { key: "oursSmall", label: "TOSS-Small" },
      { key: "oursBase", label: "TOSS-Base", highlight: true }
    ],
    samples: [
      {
        id: "sample01",
        text: "Sample 1: model scale comparison. Replace with transcript.",
        tags: ["family", "same bitrate"],
        audio: {
          gt: "assets/audio/model_family/sample01/gt.wav",
          oursTiny: "assets/audio/model_family/sample01/ours_tiny.wav",
          oursSmall: "assets/audio/model_family/sample01/ours_small.wav",
          oursBase: "assets/audio/model_family/sample01/ours_base.wav"
        }
      },
      {
        id: "sample02",
        text: "Sample 2: model scale comparison. Replace with transcript.",
        tags: ["family", "same offset"],
        audio: {
          gt: "assets/audio/model_family/sample02/gt.wav",
          oursTiny: "assets/audio/model_family/sample02/ours_tiny.wav",
          oursSmall: "assets/audio/model_family/sample02/ours_small.wav",
          oursBase: "assets/audio/model_family/sample02/ours_base.wav"
        }
      },
      {
        id: "sample03",
        text: "Sample 3: model scale comparison. Replace with transcript.",
        tags: ["family", "efficiency"],
        audio: {
          gt: "assets/audio/model_family/sample03/gt.wav",
          oursTiny: "assets/audio/model_family/sample03/ours_tiny.wav",
          oursSmall: "assets/audio/model_family/sample03/ours_small.wav",
          oursBase: "assets/audio/model_family/sample03/ours_base.wav"
        }
      }
    ]
  }
};
