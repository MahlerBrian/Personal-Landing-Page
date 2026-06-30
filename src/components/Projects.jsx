import { projects } from '../projects.js'

// Projects: renders one entry for every object in the `projects` array.
// To add/edit/remove a project, change src/projects.js — not this file.

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          // `key` helps React track list items; the title is unique enough here.
          <article className="project" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Tech tags, rendered from the project's `tech` array */}
            <ul className="tags" aria-label="Technologies used">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="project-links">
              {/* Only show the Live demo link if a demo URL was provided */}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
              {/* Same for Source */}
              {project.source && (
                <a href={project.source} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
