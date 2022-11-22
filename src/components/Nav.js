import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ page, setPage }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => setPage('about')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={page === 'about' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => setPage('projects')}
          // Check to see if the page is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={page === 'projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => setPage('resume')}
          // Check to see if the page is `resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={page === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => setPage('contact')}
          // Check to see if the page is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={page === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Nav;
