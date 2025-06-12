import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Smit Vasani </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently pursuing my Master's degree at the <span className="purple">University of Illinois Urbana-Champaign (UIUC)</span>.
            <br />
            I completed my Bachelor's degree from the <span className="purple">University of Wisconsin-Madison</span>.
            <br />
            I am working as a <span className="purple">Research Assistant</span>, collaborating with UW Madison, Stanford, and Google DeepMind 
            on understanding human opinion dynamics using Large Language Models.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Smit Vasani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
