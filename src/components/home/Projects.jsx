import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Executive Coach Builders",
    description: "Built as a capstone project at OTC, this site for Executive Coach Builders features a custom client portal — giving the ECB team full control over their inventory and site content without touching a line of code.",
    link: "https://executivecoachbuilders-production.up.railway.app/",
    image: "./ecb.webp",
  },
  {
    title: "Demo Store",
    description: "A full-featured e-commerce concept showcasing what ColdBrew can build. It includes a modern storefront design, customizable product listings, and a dashboard for managing form submissions — ready to be tailored for any client.",
    link: "https://web-demo.gravessoftware.dev/",
    image: "./demo-store.webp",
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrent((i) => (i + 1) % projects.length);

  const project = projects[current];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Our Work</h2>
      <div className="projects-rule" />
      <div className="projects-carousel">
        <button className="carousel-arrow carousel-arrow--prev side-only" onClick={prev} aria-label="Previous project">
          <img src="/chalk_arrow.webp" alt="" role="presentation" aria-hidden="true" />
        </button>
        <div className="project-card">
          <div className="card-image-wrapper">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
          </div>
          <div className="card-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
        <button className="carousel-arrow carousel-arrow--next side-only" onClick={next} aria-label="Next project">
          <img src="/chalk_arrow.webp" alt="" role="presentation" aria-hidden="true" />
        </button>
      </div>
      <div className="carousel-nav">
        <button className="carousel-arrow carousel-arrow--prev wide-only" onClick={prev} aria-label="Previous project">
          <img src="/chalk_arrow.webp" alt="" role="presentation" aria-hidden="true" />
        </button>
        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-arrow carousel-arrow--next wide-only" onClick={next} aria-label="Next project">
          <img src="/chalk_arrow.webp" alt="" role="presentation" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
