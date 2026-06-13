window.tossCodecDemoData = {
  threeKbps: {
    caption: "3 kbps audio comparison with matched speech samples across baseline codecs and TOSS-Codec variants.",
    columns: [
      { key: "gt", label: "Ground Truth" },
      { key: "encodec", label: "EnCodec" },
      { key: "lyra", label: "Lyra" },
      { key: "speechTokenizer", label: "SpeechTokenizer" },
      { key: "dac16", label: "DAC 16 kHz" },
      { key: "tossTiny", label: "TOSS-Tiny" },
      { key: "tossSmall", label: "TOSS-Small" },
      { key: "tossBase", label: "TOSS-Base", highlight: true }
    ],
    samples: [
      {
        id: "sample01",
        text: "Female speaker, slow speaking rate.",
        tags: ["female", "slow", "3.125 kbps"],
        audio: {
          gt: "assets/audio/3kbps/sample01/gt.flac",
          encodec: "assets/audio/3kbps/sample01/encodec.wav",
          lyra: "assets/audio/3kbps/sample01/lyra.wav",
          speechTokenizer: "assets/audio/3kbps/sample01/speechtokenizer.wav",
          dac16: "assets/audio/3kbps/sample01/dac 16.wav",
          tossTiny: "assets/audio/3kbps/sample01/tiny.wav",
          tossSmall: "assets/audio/3kbps/sample01/small.wav",
          tossBase: "assets/audio/3kbps/sample01/base.wav"
        }
      },
      {
        id: "sample02",
        text: "Male speaker, fast speaking rate.",
        tags: ["male", "fast", "3.125 kbps"],
        audio: {
          gt: "assets/audio/3kbps/sample02/gt.flac",
          encodec: "assets/audio/3kbps/sample02/encodec.wav",
          lyra: "assets/audio/3kbps/sample02/lyra.wav",
          speechTokenizer: "assets/audio/3kbps/sample02/speechtokenizer.wav",
          dac16: "assets/audio/3kbps/sample02/dac 16.wav",
          tossTiny: "assets/audio/3kbps/sample02/tiny.wav",
          tossSmall: "assets/audio/3kbps/sample02/small.wav",
          tossBase: "assets/audio/3kbps/sample02/base.wav"
        }
      },
      {
        id: "sample03",
        text: "Female speaker, fast speaking rate.",
        tags: ["female", "fast", "3.125 kbps"],
        audio: {
          gt: "assets/audio/3kbps/sample03/gt.flac",
          encodec: "assets/audio/3kbps/sample03/encodec.wav",
          lyra: "assets/audio/3kbps/sample03/lyra.wav",
          speechTokenizer: "assets/audio/3kbps/sample03/speechtokenizer.wav",
          dac16: "assets/audio/3kbps/sample03/dac 16.wav",
          tossTiny: "assets/audio/3kbps/sample03/tiny.wav",
          tossSmall: "assets/audio/3kbps/sample03/small.wav",
          tossBase: "assets/audio/3kbps/sample03/base.wav"
        }
      }
    ]
  },
  sixKbps: {
    caption: "6 kbps audio comparison with matched speech samples across baseline codecs and TOSS-Codec variants.",
    columns: [
      { key: "gt", label: "Ground Truth" },
      { key: "encodec", label: "EnCodec" },
      { key: "audiodec", label: "AudioDec" },
      { key: "lyra", label: "Lyra" },
      { key: "dac16", label: "DAC 16 kHz" },
      { key: "tossTiny", label: "TOSS-Tiny" },
      { key: "tossSmall", label: "TOSS-Small" },
      { key: "tossBase", label: "TOSS-Base", highlight: true }
    ],
    samples: [
      {
        id: "sample01",
        text: "Female speaker, slow speaking rate.",
        tags: ["female", "slow", "6.25 kbps"],
        audio: {
          gt: "assets/audio/6kbps/sample01/gt.flac",
          encodec: "assets/audio/6kbps/sample01/encodec.wav",
          audiodec: "assets/audio/6kbps/sample01/audiodec.wav",
          lyra: "assets/audio/6kbps/sample01/lyra.wav",
          dac16: "assets/audio/6kbps/sample01/dac 16.wav",
          tossTiny: "assets/audio/6kbps/sample01/tiny.wav",
          tossSmall: "assets/audio/6kbps/sample01/small.wav",
          tossBase: "assets/audio/6kbps/sample01/base.wav"
        }
      },
      {
        id: "sample02",
        text: "Male speaker, fast speaking rate.",
        tags: ["male", "fast", "6.25 kbps"],
        audio: {
          gt: "assets/audio/6kbps/sample02/gt.flac",
          encodec: "assets/audio/6kbps/sample02/encodec.wav",
          audiodec: "assets/audio/6kbps/sample02/audiodec.wav",
          lyra: "assets/audio/6kbps/sample02/lyra.wav",
          dac16: "assets/audio/6kbps/sample02/dac 16.wav",
          tossTiny: "assets/audio/6kbps/sample02/tiny.wav",
          tossSmall: "assets/audio/6kbps/sample02/small.wav",
          tossBase: "assets/audio/6kbps/sample02/base.wav"
        }
      },
      {
        id: "sample03",
        text: "Female speaker, fast speaking rate.",
        tags: ["female", "fast", "6.25 kbps"],
        audio: {
          gt: "assets/audio/6kbps/sample03/gt.flac",
          encodec: "assets/audio/6kbps/sample03/encodec.wav",
          audiodec: "assets/audio/6kbps/sample03/audiodec.wav",
          lyra: "assets/audio/6kbps/sample03/lyra.wav",
          dac16: "assets/audio/6kbps/sample03/dac 16.wav",
          tossTiny: "assets/audio/6kbps/sample03/tiny.wav",
          tossSmall: "assets/audio/6kbps/sample03/small.wav",
          tossBase: "assets/audio/6kbps/sample03/base.wav"
        }
      }
    ]
  },
  modelFamily: {
    caption: "TOSS-Codec model-family comparison. These rows reuse the currently available 3 kbps Tiny, Small, and Base samples.",
    columns: [
      { key: "gt", label: "Ground Truth" },
      { key: "tossTiny", label: "TOSS-Tiny" },
      { key: "tossSmall", label: "TOSS-Small" },
      { key: "tossBase", label: "TOSS-Base", highlight: true }
    ],
    samples: [
      {
        id: "sample01",
        text: "Female speaker, slow speaking rate.",
        tags: ["female", "slow", "family"],
        audio: {
          gt: "assets/audio/3kbps/sample01/gt.flac",
          tossTiny: "assets/audio/3kbps/sample01/tiny.wav",
          tossSmall: "assets/audio/3kbps/sample01/small.wav",
          tossBase: "assets/audio/3kbps/sample01/base.wav"
        }
      },
      {
        id: "sample02",
        text: "Male speaker, fast speaking rate.",
        tags: ["male", "fast", "family"],
        audio: {
          gt: "assets/audio/3kbps/sample02/gt.flac",
          tossTiny: "assets/audio/3kbps/sample02/tiny.wav",
          tossSmall: "assets/audio/3kbps/sample02/small.wav",
          tossBase: "assets/audio/3kbps/sample02/base.wav"
        }
      },
      {
        id: "sample03",
        text: "Female speaker, fast speaking rate.",
        tags: ["female", "fast", "family"],
        audio: {
          gt: "assets/audio/3kbps/sample03/gt.flac",
          tossTiny: "assets/audio/3kbps/sample03/tiny.wav",
          tossSmall: "assets/audio/3kbps/sample03/small.wav",
          tossBase: "assets/audio/3kbps/sample03/base.wav"
        }
      }
    ]
  }
};
