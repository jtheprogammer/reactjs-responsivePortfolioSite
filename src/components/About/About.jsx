import { useContext } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Me from "../../assets/Images/About-Me.jpg";
import AboutTabs from "../AboutTabs/AboutTabs";
import { ActiveNavContext } from "../../context";

const About = () => {
  const { aboutRef } = useContext(ActiveNavContext);
  return (
    <section id="about" ref={aboutRef}>
      <div className="section__header">
        <h4>Get To Know More</h4>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon icon={faBriefcase} />
              <h3>Education</h3>
              <p>3+ Years as a PhD Candidate in Immunology</p>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faFileCode} />
              <h3>Coding</h3>
              <p>2+ Years of Personal Programming Experience</p>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faGithub} />
              <h3>Portfolio</h3>
              <p>10 Completed Projects Posted Publically on GitHub</p>
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
