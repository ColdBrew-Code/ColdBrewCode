import { useEffect, useState } from "react"
import Header from "./components/Header";
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
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return

    const checkArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setAtStart(scrollLeft <= 5)
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5)
    }

    const handleWheel = (e) => {
      if (window.innerWidth < 1400) return
      e.preventDefault()
      container.scrollLeft += e.deltaY  // continuous, smooth — snap-type handles settling
    }

    checkArrows()
    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', checkArrows)
    window.addEventListener('resize', checkArrows)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', checkArrows)
      window.removeEventListener('resize', checkArrows)
    }
  }, [])

  return (
    <div className="app-wrapper">   {/* give the wrapper a class */}
      <Header />
      <main id="main" role="main" aria-label="Primary content" className="scroll-container">
        <Hero />
        <About />
        <Team />
        <Projects />
        <Contact />
      </main>
      <button
        className="scroll-arrow scroll-arrow--left"
        aria-label="Scroll left"
        onClick={() => scrollSection(-1)}
        aria-hidden={atStart}
        disabled={atStart}
        tabIndex={atStart ? -1 : 0}
      >
        <img src="/chalk_arrow.webp" alt="Scroll left" />
      </button>
      <button
        className="scroll-arrow scroll-arrow--right"
        aria-label="Scroll right"
        onClick={() => scrollSection(1)}
        aria-hidden={atEnd}
        disabled={atEnd}
        tabIndex={atEnd ? -1 : 0}
      >
        <img src="/chalk_arrow.webp" alt="Scroll right" />
      </button>
      <Footer />
    </div>
  );
}

export default App;
