import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
      </main>
    </div>
  );
}

export default App;
