import React from "react";

import { List, Button } from "semantic-ui-react";

function Nav({ page, setPage }) {
  return (
    <List horizontal>
      <h1>Dylan Godfrey</h1>
      <List.Item>
        <Button inverted color="orange">
          <a
            href="#about"
            onClick={() => setPage("about")}
            className={page === "about" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </Button>
      </List.Item>
      <List.Item>
        <Button inverted color="orange">
          <a
            href="#projects"
            onClick={() => setPage("projects")}
            className={page === "projects" ? "nav-link active" : "nav-link"}
          >
            Projects
          </a>
        </Button>
      </List.Item>
      <List.Item>
        <Button inverted color="orange">
          <a
            href="#resume"
            onClick={() => setPage("resume")}
            className={page === "resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </Button>
      </List.Item>
      <List.Item>
        <Button inverted color="orange">
          <a
            href="#contact"
            onClick={() => setPage("contact")}
            className={page === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </Button>
      </List.Item>
    </List>
  );
}

export default Nav;
