import React from 'react';

import resume from "./downloadable/Dylan-Godfrey.pdf"

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} download>Download Resume PDF</a>
    </div>
  );
}
