import { useEffect, useState, useRef, useCallback } from "react"
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  // Reference to the scrolling container that holds the site sections
  const containerRef = useRef(null)

  // State flags used to enable/disable the left/right arrow buttons
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Throttle flag to avoid handling many wheel events while animating
  const isThrottled = useRef(false)

  // Keeps the current visible child index (not state because we don't need re-renders)
  const currentIndex = useRef(0)

  // Programmatic scroll to a specific section index.
  const scrollToSection = useCallback((targetIndex) => {
    const container = containerRef.current
    if (!container) return

    // Calculate width of one child (fallback to container width)
    const childWidth = container.children[0]?.clientWidth || container.clientWidth

    // Clamp target index within available children
    const target = Math.min(Math.max(targetIndex, 0), container.children.length - 1)

    // Smooth scroll to target child
    container.scrollTo({ left: target * childWidth, behavior: 'smooth' })
  }, [])

  const handleNavigateToSection = useCallback((targetIndex) => {
    const container = containerRef.current
    if (!container) return false

    if (container.scrollWidth > container.clientWidth) {
      scrollToSection(targetIndex)
      return true
    }

    return false
  }, [scrollToSection])

  // Programmatic scroll to the next/previous section.
  // `direction` is -1 for left, +1 for right.
  const scrollSection = useCallback((direction) => {
    const container = containerRef.current
    if (!container) return

    const childWidth = container.children[0]?.clientWidth || container.clientWidth
    const current = Math.round(container.scrollLeft / childWidth)

    scrollToSection(current + direction)
  }, [scrollToSection])

  // Check scroll position and update arrow visibility/state.
  const checkArrows = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    // Read scroll metrics
    const { scrollLeft, scrollWidth, clientWidth } = container
    const childWidth = container.children[0]?.clientWidth || clientWidth

    // Slight tolerance to avoid jitter near the edges
    setAtStart(scrollLeft <= 5)
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5)

    // Update the current index for other logic (no re-render)
    currentIndex.current = Math.round(scrollLeft / childWidth)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {

      // Only enable scrolling when content overflows horizontally
      const isHorizontalScrollMode = container.scrollWidth > container.clientWidth
      if (!isHorizontalScrollMode) return

      // Ignore additional wheel events while animating
      if (isThrottled.current) return

      const delta = e.deltaY
      const width = container.children[0]?.clientWidth || container.clientWidth
      const childrenCount = container.children.length
      const idx = Math.round(container.scrollLeft / width)
      let target = idx

      // Move one section left or right depending on wheel direction
      if (delta > 0) target = Math.min(idx + 1, childrenCount - 1)
      else if (delta < 0) target = Math.max(idx - 1, 0)
      if (target === idx) return

      // Prevent the page from also scrolling vertically while handling horizontal navigation
      e.preventDefault()
      isThrottled.current = true
      container.scrollTo({ left: target * width, behavior: 'smooth' })

      // Allow wheel scroll after the animation completes
      setTimeout(() => { isThrottled.current = false }, 700)
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
  }, [checkArrows])

  return (
    <div className="app-wrapper">
      <Header
        onBrandClick={() => scrollToSection(0)}
        onNavigateToSection={handleNavigateToSection}
      />
      <main id="main" role="main" aria-label="Primary content" ref={containerRef} className="scroll-container">
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
  )
}

export default App;
