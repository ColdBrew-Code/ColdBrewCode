import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
      </main>
    </div>
  );
}

export default App;
