import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/todo.png";
import chatify from "../../Assets/Projects/mystore.png";
import bitsOfCode from "../../Assets/Projects/cal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="My Store"
              description="A web application power a mock online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase"
              ghLink="https://github.com/shamssar/storefront"
              demoLink="https://incomparable-mousse-c6f709.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ToDo"
              description="A web application for securely managing a To Do List."
              ghLink="https://github.com/shamssar/todo-app"
              demoLink="https://chimerical-boba-d62836.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="calculator"
              description="simple calculator"
              ghLink=""
              demoLink="https://628beb08bd4a151493af60ab--fantastic-cascaron-ca7b43.netlify.app/"              
            />
          </Col>

          

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
