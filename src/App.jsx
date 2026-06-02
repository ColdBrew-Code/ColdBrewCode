import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
