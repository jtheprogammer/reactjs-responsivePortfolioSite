import React from "react";
import "./Portfolio.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Robinhood from "../../assets/Images/RobinhoodClone/Robinhood-UI.jpg";

const portfolioItems = [
  {
    id: 1,
    image: Robinhood,
    title: "Default Title",
    description: "Tech Stack Here",
    link: "",
  },
  {
    id: 2,
    image: Robinhood,
    title: "Default Title",
    description: "Tech Stack Here",
    link: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>The Projects I've Completed</h4>
      <h2>On My Programming Journey</h2>

      <div className="container portfolio__container">
        {portfolioItems.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="Robinhood UI Clone" />
            </div>
            <div className="portfolio__item-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="btn" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
