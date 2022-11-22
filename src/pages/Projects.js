import React from 'react';
import Project from '../components/Project';

const projects = [  
  {
  title: "Good Food Reviews",
  description: "Socialize with other food critics/lovers.",
  github: "https://github.com/DianasJourney/GoodFoodReviews",
  technologies: ["Heroku", "Sequelize", "Express", "Handlebars", "SemanticUI"]
  },
  {
    title: "Where2Watch",
    description: "Easily find out which movies are streaming and on what platform",
    github: "https://github.com/DylanGodfrey/Where2Watch",
    technologies: ["Tailwind", "WebAPI"]
  },
  {
    title: "Note-Taker",
    description: "Keep track of important notes all in one place",
    github: "https://github.com/DylanGodfrey/Note-Taker",
    technologies: ["Express"]
  },
  {
    title: "Just Another Text Editor",
    description: "Let anyone write code with Javascript syntaxing online or off",
    github: "https://github.com/DylanGodfrey/Just-Another-Text-Editor",
    technologies: ["Express", "PWA"]
  },  
  {
    title: "Employee Tracker",
    description: "View, edit and create new employees, roles or departments through the command line.",
    github: "https://github.com/DylanGodfrey/Employee-Tracker",
    technologies: ["Inquirer", "MySQL"]
  },
  {
    title: "Social Network API",
    description: "Share your thoughts and make friends",
    github: "https://github.com/DylanGodfrey/Social-Network-API",
    technologies: ["Express", "Mongoose"]
  }
]


export default function Projects() {
  return (
    <article className="portfolio">
      <h2>Portfolio</h2>
      {projects.map(project => {return ( <Project project={project}/>); })}
  </article>
  );
}
