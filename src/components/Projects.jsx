import "./Projects.css";

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and the technologies used.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the technologies used.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the technologies used.",
    link: "#",
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
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
