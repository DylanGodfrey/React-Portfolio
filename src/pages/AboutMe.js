import React from 'react';

import face from './assets/images/my-face.png'

export default function AboutMe() {
  return (
    <section className='aboutme'>
    <figure id="face">
      <img src={face} alt="My wonderful face." />
    </figure>
    
    <section id="about-me-desc">
      <h1>About Me</h1> 
      <p>Hi! I'm Dylan Godfrey and I am looking to start my Web Developer career with a bang!</p>
      <p>Reach out if you're interested!</p>
    </section>
    </section>
  );
}