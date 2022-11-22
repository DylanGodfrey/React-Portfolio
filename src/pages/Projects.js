import React from 'react';
import Project from '../components/Project';

const projects = [  
  {
  title: "Good Food Reviews",
  description: "Socialize with other food critics/lovers.",
  github: "https://github.com/DianasJourney/GoodFoodReviews",
  deployed: "https://goodie-foodies-heroku.herokuapp.com/",
  src: "../assets/goodfood.jpg",
  technologies: ["Heroku", "Sequelize", "Express", "Handlebars", "SemanticUI"]
  },
  {
    title: "Where2Watch",
    description: "Easily find out which movies are streaming and on what platform",
    github: "https://github.com/DylanGodfrey/Where2Watch",
    deployed: "https://dylangodfrey.github.io/Where2Watch/",
    src: "../assets/where2watch.png",
    technologies: ["Tailwind", "WebAPI"]
  },
  {
    title: "Note Taker",
    description: "Keep track of important notes all in one place",
    github: "https://github.com/DylanGodfrey/Note-Taker",  
    deployed: "https://goodie-foodies-heroku.herokuapp.com/",
    src: "../assets/notetaker.png",
    technologies: ["Express"]
  },
  {
    title: "Just Another Text Editor",
    description: "Let anyone write code with Javascript syntaxing online or off",
    github: "https://github.com/DylanGodfrey/Just-Another-Text-Editor",
    deployed: "https://nameless-meadow-18411.herokuapp.com/",
    src: "../assets/jate.png",
    technologies: ["Express", "PWA"]
  },  
  {
    title: "Work Day Scheduler",
    description: "Keep track of their busy work day schedules through an easy-to-use web interface.",
    github: "https://github.com/DylanGodfrey/Work-Day-Scheduler",
    deployed: "https://dylangodfrey.github.io/Work-Day-Scheduler/",
    src: "../assets/workday.png",
    technologies: ["Inquirer", "MySQL"]
  },
  {
    title: "Team Profile Generator",
    description: "Quickly create a team portfolio web page through a few short prompts on the command line.",
    github: "https://github.com/DylanGodfrey/Team-Profile-Generator",
    deployed: "",
    src: "",
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
