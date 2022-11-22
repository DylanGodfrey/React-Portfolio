import React from 'react';

import resume from "./downloadable/Dylan-Godfrey.pdf";

import { List, Button, Card } from "semantic-ui-react";


const skills = [
  "JavaScript",
  "Python",  
  "Bash Scripting",
  "SQL and NoSQL",
  "HTML/CSS",
  "React",
  "Redux",
  "Express",
  "Node.js",
  "Bootstrap",
  "SemanticUI",
  "Tailwind",
  "RESTful APIs",
  "Graph QL",
  "Heroku Deployment"
]

export default function Resume() {
  return (
    <Card>
      <h1>Resume</h1>
      <h3>Skills:</h3>
      <List>
        {skills.map(skill => { return (<List.Item>{skill}</List.Item>)})}
        </List>
        <Button inverted color="orange">
          <a href={resume} download>Download Resume PDF</a>
        </Button>
    </Card>
  );
}
