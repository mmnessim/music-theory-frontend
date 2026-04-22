import {
  type ChordProgression,
  randomChordProgression,
  type Mode,
  type PitchClass,
  type ProgressionItem,
  voicedChordToAbc,
  voiceChord,
  abcHeader,
  type Inversion,
  type Octave,
  type ScaleNumeral,
} from "@mmnessim/music-theory";
import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";
import { useEffect, useRef, useState } from "react";
import { RootSelector } from "./RootSelector";
import { ModeSelector } from "./ModeSelector";
import { InversionSelector } from "./InversionSelector";
import { OctaveSelector } from "./OctaveSelector";

export function ProgressionGenerator() {
  const [root, setRoot] = useState<PitchClass>("C");
  const [mode, setMode] = useState<Mode>("major");
  const [inversions, setInversions] = useState<Record<ScaleNumeral, Inversion>>(
    {
      I: "root",
      II: "first",
      III: "second",
      IV: "first",
      V: "root",
      VI: "first",
      VII: "first",
    },
  );
  const [octaves, setOctaves] = useState<Record<ScaleNumeral, Octave>>({
    I: 4,
    II: 4,
    III: 3,
    IV: 3,
    V: 3,
    VI: 3,
    VII: 3,
  });
  const [progression, setProgression] = useState<ChordProgression>();
  const [abc, setAbc] = useState("");
  const notationRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLDivElement>(null);

  function generateProg() {
    const newProgression = randomChordProgression(root, mode);
    setProgression(newProgression);
    const header = abcHeader({ title: "Test" });
    const abcString = newProgression.items.map((i) => {
      const inv = inversions[i.numeral];
      return voicedChordToAbc(voiceChord(i.chord, octaves[i.numeral], inv));
    });
    const full = header + "\n" + abcString.join("8| ") + "8";
    setAbc(full);
  }

  useEffect(() => {
    if (!abc || !notationRef.current || !audioRef.current) return;

    const visualObj = abcjs.renderAbc(notationRef.current, abc);

    if (abcjs.synth.supportsAudio()) {
      const synth = new abcjs.synth.SynthController();
      synth.load(audioRef.current, null, {
        displayLoop: false,
        displayRestart: true,
        displayPlay: true,
        displayProgress: true,
      });
      synth.setTune(visualObj[0]!, false, { tempo: 120 });
    }
  }, [abc]);

  function displayNumeral(item: ProgressionItem): string {
    switch (item.chord.chordType) {
      case "major":
        return item.numeral;
      case "minor":
        return item.numeral.toLowerCase();
      case "dim":
        return item.numeral.toLowerCase() + "°";
      case "dom7":
        return item.numeral + "7";
      case "fullDim7":
        return item.numeral.toLowerCase() + "°7";
      case "halfDim7":
        return item.numeral.toLowerCase() + "ø";
      default:
        return item.numeral;
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-1">Progression Generator</h2>
      <p className="text-on-surface-variant text-sm mb-6">
        Generate chord progressions from a key and scale.
      </p>
      <div className="flex gap-4">
        <RootSelector root={root} onRootChange={setRoot} />
        <ModeSelector mode={mode} onModeChange={setMode} />
        <InversionSelector
          inversions={inversions}
          onInvChange={setInversions}
        />
        <OctaveSelector octaves={octaves} onOctaveChange={setOctaves} />
      </div>
      <button onClick={generateProg} className="bg-primary text-on-primary 
        px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg 
        active:shadow-sm transition-all cursor-pointer">Generate</button>
      <div id="paper"></div>
      <div ref={notationRef} />
      <div ref={audioRef} style={{ marginTop: "1rem" }} />
      {progression &&
        progression.items.map((item, index) => (
          <div className="card" key={index}>
            {displayNumeral(item)} {item.chord.chordType} {item.chord.root}{" "}
            {item.chord.third} {item.chord.fifth} {item.chord.seventh}
          </div>
        ))}
    </div>
  );
}
