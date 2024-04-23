import About from "./components/about";
import Navbar from "./components/navbar";
import Projets from "./components/projets";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font min-w-min md:min-w-screen p-0 m-0">
      <Navbar />
      <About />
      <Projets />
      <Skills />
      <Contact />
    </main>
  );
}
