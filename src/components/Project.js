import React from 'react';

export default function Project({project}) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a className="btn" href={project.github}>View GitHub</a>
      <a className="btn" href={project.deployed}>View Deployed Application</a>
      <section className="technologies">
        {project.technologies.map(tech => { return (<div>{tech}</div>); })}
        </section>
        <section>
            <img src={project.src} alt={project.alt}></img>
        </section>
    </div>
  );
}
