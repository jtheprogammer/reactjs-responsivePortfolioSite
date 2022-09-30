import React, { useContext } from "react";

import { experienceItems } from "./experienceItems";
import "./Experience.css";
import { ActiveNavContext } from "../../context";

const Experience = () => {
  const { experienceRef } =
  useContext(ActiveNavContext);
  return (
    <section id="experience" ref={experienceRef}>
      <div className="section__header" >
      <h4>A Brief Look Into</h4>
      <h2>My Programming Expertise</h2>
      </div>

      <div className="container experience__container">
      {Object.keys(experienceItems).map((item) => (
        <div>
          <h3>{experienceItems[item].title}</h3>
          <div className="experience__content">
          {Object.keys(experienceItems[item].skills).map((skill) => (
            <article className="experience__details">
            {experienceItems[item].skills[skill].icon}
              <div>
                <h4>{experienceItems[item].skills[skill].tool}</h4>
                {/* <p>{experienceItems[item].skills[skill].description}</p> */}
              </div>
            </article>
          ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Experience;
