import { ProgressionGenerator } from "./components/ProgressionGenerator";
import "./index.css";

export function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-on-background mb-8 tracking-tight">
        Music Theory
      </h1>
      <div className="max-width">
        <ProgressionGenerator />
      </div>
    </div>
  );
}

export default App;
