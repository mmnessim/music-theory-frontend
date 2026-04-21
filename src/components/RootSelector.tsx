import { RootPitchClasses, type PitchClass } from "@mmnessim/music-theory";

type RootSelectorProps = {
  root: PitchClass;
  onRootChange: (root: PitchClass) => void;
};

export function RootSelector({ root, onRootChange }: RootSelectorProps) {
  return (
    <div className="card">
      <h3 className="text-2xl">Select root:</h3>
      <h4 className="text-2xl font-semibold">{root}</h4>
      <select
        value={root}
        onChange={(e) => onRootChange(e.target.value as PitchClass)}
        className="select-input"
      >
        {RootPitchClasses.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
    </div>
  );
}
