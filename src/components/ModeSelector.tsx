import type { Mode } from "@mmnessim/music-theory";

type ModeSelectorProps = {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
};

export function ModeSelector({ mode, onModeChange }: ModeSelectorProps) {
  const modes: Mode[] = ["major", "harmonic minor", "natural minor"];
  return (
    <div className="card">
      <h3 className="text-2xl">Select Mode:</h3>
      <h4 className="text-2xl font-semibold">{mode}</h4>
      <select
        value={mode}
        onChange={(e) => onModeChange(e.target.value as Mode)}
        className="select-input"
      >
        {modes.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>
    </div>
  );
}
