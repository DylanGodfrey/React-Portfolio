import React from 'react';

import face from './assets/images/my-face.png'

import { Card, Image } from "semantic-ui-react";

export default function AboutMe() {
  return (
    <Card className='aboutme centered'>
      <Image src={face} id="face" alt="My wonderful face." />
      <Card.Description>
        <h1>About Me</h1> 
        <p>Hi! I'm Dylan Godfrey and I am looking to start my Web Developer career with a bang!</p>
        <p>Reach out if you're interested!</p>
        </Card.Description>
    </Card>
  );
}