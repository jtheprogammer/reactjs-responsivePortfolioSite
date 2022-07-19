import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Me from "../../assets/Images/About-Me.jpg";
import AboutTabs from "../AboutTabs/AboutTabs";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon 
                icon={faBriefcase}
              />
              <h3>Education</h3>
              <p>3+ Years as a Graduate-level Biology Researcher</p>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faFileCode} />
              <h3>Coding</h3>
              <p>1.5+ Years of Personal Programming Experience</p>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faGithub} />
              <h3>Portfolio</h3>
              <p>
                7 Completed Projects Posted Publically on GitHub
              </p>
            </article>
          </div>
          <div className="about__tabs">
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
