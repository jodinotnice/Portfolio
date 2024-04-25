import About from "./components/about";
import Projets from "./components/projets";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Projets />
      <Skills />
      <Contact />
    </main>
  );
}
