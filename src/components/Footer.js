import React from 'react';

import { Container, List } from 'semantic-ui-react'

export default function Footer() {
  return (
    <Container>
    <h2>Contact</h2>
    <List horizontal>
    <List.Item><p>Phone: 647-782-9904</p> </List.Item>
    
    <List.Item><p>LinkedIn: https://www.linkedin.com/in/dylan-godfrey/</p></List.Item>
    
    <List.Item><p>GitHub: https://github.com/DylanGodfrey/</p></List.Item>
    
    <List.Item><p>Twitter: https://twitter.com/dwizard962</p></List.Item>
    </List>
    </Container>
  );
}
