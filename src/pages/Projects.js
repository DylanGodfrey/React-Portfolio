import React from 'react';
import Project from '../components/Project';

import { Card } from 'semantic-ui-react'


const projects = [
  {
    title: "Vapour",
    description: "Collect and save your favourite games",
    github: "https://github.com/MichaelSinn/vapour",
    deployed: "https://vapour-games.herokuapp.com/",
    src: "https://user-images.githubusercontent.com/109758045/199080164-640ca903-23ed-4bba-b878-5d81105bba88.jpg",
    alt: "Good Food Reviews",
    technologies: ["Heroku", "Sequelize", "Express", "JWT", "BulmaUI"]
    }, 
  {
  title: "Good Food Reviews",
  description: "Socialize with other food critics/lovers.",
  github: "https://github.com/DianasJourney/GoodFoodReviews",
  deployed: "https://goodie-foodies-heroku.herokuapp.com/",
  src: "https://user-images.githubusercontent.com/109758045/199080164-640ca903-23ed-4bba-b878-5d81105bba88.jpg",
  alt: "Good Food Reviews",
  technologies: ["Heroku", "Sequelize", "Express", "Handlebars", "SemanticUI"]
  },
  {
    title: "Where2Watch",
    description: "Easily find out which movies are streaming and on what platform",
    github: "https://github.com/DylanGodfrey/Where2Watch",
    deployed: "https://dylangodfrey.github.io/Where2Watch/",
    src: "https://user-images.githubusercontent.com/112361368/193619058-3542a1d3-5c13-4b5b-8cfd-24f69413c8e6.png",
    alt: "Where2Watch",
    technologies: ["Tailwind", "WebAPI"]
  },
  {
    title: "Note Taker",
    description: "Keep track of important notes all in one place",
    github: "https://github.com/DylanGodfrey/Note-Taker",  
    deployed: "https://immense-cliffs-51919.herokuapp.com/",
    src: "https://raw.githubusercontent.com/DylanGodfrey/Note-Taker/main/assets/samplescreenshot.png",
    alt: "Note Taker",
    technologies: ["Express"]
  },
  {
    title: "Just Another Text Editor",
    description: "Let anyone write code with Javascript syntaxing online or off",
    github: "https://github.com/DylanGodfrey/Just-Another-Text-Editor",
    deployed: "https://nameless-meadow-18411.herokuapp.com/",
    alt: "Just Another Text Editor",
    src: "https://raw.githubusercontent.com/DylanGodfrey/Just-Another-Text-Editor/main/assets/samplescreenshot.png",
    technologies: ["Express", "PWA"]
  },  
  {
    title: "Work Day Scheduler",
    description: "Keep track of their busy work day schedules through an easy-to-use web interface.",
    github: "https://github.com/DylanGodfrey/Work-Day-Scheduler",
    deployed: "https://dylangodfrey.github.io/Work-Day-Scheduler/",
    src: "https://raw.githubusercontent.com/DylanGodfrey/Work-Day-Scheduler/main/assets/images/samplescreenshot.png",
    alt: "Work Day Scheduler",
    technologies: ["Inquirer", "MySQL"]
  },
  {
    title: "Team Profile Generator",
    description: "Quickly create a team portfolio web page through a few short prompts on the command line.",
    github: "https://github.com/DylanGodfrey/Team-Profile-Generator",
    deployed: "https://dylangodfrey.github.io/Team-Profile-Generator/",
    src: "https://raw.githubusercontent.com/DylanGodfrey/Team-Profile-Generator/main/dist/images/samplescreenshot.png",
    alt: "Team Profile Generator",
    technologies: ["Express", "Mongoose"]
  }
]


export default function Projects() {
  return (
      <Card.Group>
        {projects.map(project => {return ( <Project project={project}/>); })}
      </Card.Group>
  );
}
