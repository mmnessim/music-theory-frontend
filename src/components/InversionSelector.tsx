import type { Inversion, ScaleNumeral } from "@mmnessim/music-theory";

type InversionSelectorProps = {
  inversions: Record<ScaleNumeral, Inversion>;
  onInvChange: (inversions: Record<ScaleNumeral, Inversion>) => void;
};

const inversionOptions: Inversion[] = ["root", "first", "second", "third"];
const numerals: ScaleNumeral[] = ["I", "II", "III", "IV", "V", "VI", "VII"];

export function InversionSelector({
  inversions,
  onInvChange,
}: InversionSelectorProps) {
  function handleChange(numeral: ScaleNumeral, inversion: Inversion) {
    onInvChange({ ...inversions, [numeral]: inversion });
  }

  return (
    <div className="card">
      <h3 className="text-2xl mb-4">Set Inversions</h3>
      <div className="flex flex-col gap-2">
        {numerals.map((numeral) => (
          <div key={numeral} className="flex items-center gap-4">
            <span className="w-8 font-semibold">{numeral}</span>
            <div className="flex gap-2">
              {inversionOptions.map((inv) => (
                <button
                  key={inv}
                  onClick={() => handleChange(numeral, inv)}
                  className={`px-3 py-1 rounded text-sm ${
                    inversions[numeral] === inv
                      ? "bg-primary text-white"
                      : "bg-surface text-on-surface"
                  }`}
                >
                  {inv}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
