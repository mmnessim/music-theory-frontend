import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { ProgressionGenerator } from "./components/ProgressionGenerator";
import "./index.css";

const Home = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold">Music Theory Explorer</h1>
    <p className="mt-4 text-slate-600">
      Select a tool to begin generating tonal chord progressions.
    </p>
    <ProgressionGenerator />
  </div>
);

export default function App() {
  return (
    <BrowserRouter basename="/music-theory-frontend">
      <nav className="p-4 border-b border-slate-200 flex gap-6 bg-white">
        <Link
          to="/"
          className="font-semibold text-slate-900 hover:text-indigo-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold text-slate-900 hover:text-indigo-600"
        >
          About
        </Link>
        <a
          href="https://www.npmjs.com/package/@mmnessim/music-theory"
          target="_blank"
          className="font-semibold text-slate-900 hover:text-indigo-600"
        >
          NPM package
        </a>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
