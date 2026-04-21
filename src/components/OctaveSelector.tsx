import type { Octave, ScaleNumeral } from "@mmnessim/music-theory"

type OctaveSelectorProps = {
    octaves: Record<ScaleNumeral, Octave>;
    onOctaveChange: (octaves: Record<ScaleNumeral, Octave>) => void;
}

const octaveOptions: Octave[] = [0, 1, 2, 3, 4, 5, 6, 7];
const numerals: ScaleNumeral[] = ["I", "II", "III", "IV", "V", "VI", "VII"];

export function OctaveSelector({
    octaves,
    onOctaveChange
}: OctaveSelectorProps) {
    function handleChange(numeral: ScaleNumeral, octave: Octave) {
        onOctaveChange({ ...octaves, [numeral]: octave });
    }

    return (
        <div className="card">
            <h3 className="text-2xl mb-4">Set Octaves</h3>
            <div className="flex flex-col gap-2">
                {numerals.map((numeral) => (
                    <div key={numeral} className="flex items-center gap-4">
                        <span className="w-8 font-semibold">{numeral}</span>
                        <div className="flex gap-2">
                            {octaveOptions.map((oct) => (
                                <button
                                    key={oct}
                                    onClick={() => handleChange(numeral, oct)}
                                    className={`px-3 py-1 rounded text-sm ${
                                        octaves[numeral] === oct
                                            ? "bg-primary text-white"
                                            : "bg-surface text-on-surface"
                                    }`}
                                >
                                    {oct}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}