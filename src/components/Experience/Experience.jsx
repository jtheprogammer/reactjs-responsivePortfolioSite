import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import "./Experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <h4>A Brief Look Into</h4>
      <h2>My Programming Expertise</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FontAwesomeIcon
                icon={faCode}
                className="experience__details-icon"
              />
              <div className="experience__details-description">
                <h4>HTML</h4>
                <p>Experience...</p>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon
                icon={faCode}
                className="experience__details-icon"
              />
              <div className="experience__details-description">
                <h4>HTML</h4>
                <p>Experience...</p>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FontAwesomeIcon
                icon={faCode}
                className="experience__details-icon"
              />
              <div className="experience__details-description">
                <h4>HTML</h4>
                <p>Experience...</p>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon
                icon={faCode}
                className="experience__details-icon"
              />
              <div className="experience__details-description">
                <h4>HTML</h4>
                <p>Experience...</p>
              </div>
            </article>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Experience