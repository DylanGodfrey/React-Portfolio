import React from 'react';

import { Card, Image, Button, ButtonGroup } from 'semantic-ui-react';

export default function Project({project}) {
  return (
    <Card fluid>
      <Card.Header>{project.title}</Card.Header>
      <Card.Description>{project.description} </Card.Description>
      <Card.Content extra>
        <ButtonGroup>
        {project.technologies.map(tech => { return (<Button>{tech}</Button>); })}
        </ButtonGroup>
        </Card.Content>
        <Image src={project.src} alt={project.alt} />
        <Card.Content extra>
        <Button inverted color='blue'>
        <a  href={project.github}>View GitHub</a>
        </Button>
        <Button inverted color='blue'>
        <a  href={project.deployed}>View Deployed Application</a>
        </Button>
        </Card.Content>
    </Card>
  );
}
