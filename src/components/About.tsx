export function About() {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-sm border-slate-100 rounded-xl">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold text-slate-900 tracking-light">
          About @mmnessim/music-theory
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          A logic-based TypeScript library for generating tonal chord
          progressions
        </p>
      </header>
      <section className="space-y-8 text-slate-800">
        <div>
          <h2 className="text-2xl font-semibold mb-3">The Logic Engine</h2>
          <p className="leading-relaxed">
            Unlike simple lookup tables, this library models harmony as a
            <strong> directed graph of functional areas</strong>. Every valid
            progression starts on the tonic and follows a specific flow:{" "}
            <em>tonic → predominant → dominant → cadence</em>.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-indigo-500">
          <h3 className="font-bold text-indigo-900">Key Concepts</h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-indigo-800">
            <li>
              <strong>Pitch Classes:</strong> Distinct enharmonic spellings (C#
              ≠ Db).
            </li>
            <li>
              <strong>Functional Areas:</strong> Tonic, Tonic Extension,
              Predominant, Dominant, and Cadence.
            </li>
            <li>
              <strong>Pitches and Octaves:</strong> Pitches specify PitchClass
              and Octaves ranging from 0 to 7.
            </li>
            <li>
              <strong>Rendering notation and MIDI playback: </strong> using{" "}
              <strong>
                <a
                  href="https://www.abcjs.net/"
                  target="_blank"
                  className="underline"
                >
                  abcjs
                </a>
              </strong>
            </li>
            <li>
              <strong>Scales, Chords, and more</strong>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
