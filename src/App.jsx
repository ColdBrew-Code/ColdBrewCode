import { useEffect } from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const scrollSection = (direction) => {
  const container = document.querySelector('.scroll-container')
  if (!container) return
  container.scrollBy({ left: direction * window.innerWidth * 0.5, behavior: 'smooth' })
}

function App() {
  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return

    const handleWheel = (e) => {
      if (window.innerWidth < 1400) return
      e.preventDefault()
      container.scrollLeft += e.deltaY  // continuous, smooth — snap-type handles settling
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="app-wrapper">   {/* give the wrapper a class */}
      <Navbar />
      <main id="main" role="main" aria-label="Primary content" className="scroll-container">
        <Hero />
        <About />
        <Team />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <button className="scroll-arrow scroll-arrow--left" aria-label="Scroll left" onClick={() => scrollSection(-1)}>
        <img src="/chalk_arrow.png" alt="Scroll left" />
      </button>
      <button className="scroll-arrow scroll-arrow--right" aria-label="Scroll right" onClick={() => scrollSection( 1)}>
        <img src="/chalk_arrow.png" alt="Scroll right" />
      </button>
    </div>
  );
}

export default App;
