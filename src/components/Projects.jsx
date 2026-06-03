import "./Projects.css";

const projects = [
  {
    title: "Executive Coach Builders",
    description: "Built as a capstone project at OTC, this site for Executive Coach Builders features a custom client portal — giving the ECB team full control over their inventory and site content without touching a line of code.",
    link: "https://executivecoachbuilders-production.up.railway.app/",
    image: "./ecb.png",
  },
  {
    title: "Demo Store",
    description: "A full-featured e-commerce concept showcasing what ColdBrew can build. It includes a modern storefront design, customizable product listings, and a dashboard for managing form submissions — ready to be tailored for any client.",
    link: "https://web-demo.gravessoftware.dev/",
    image: "./demo-store.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Our Work</h2>
      <div className="projects-rule" />
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
