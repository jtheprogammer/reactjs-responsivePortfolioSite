import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";

const contactOptions = [
  {
    field: "Email",
    info: "jlcjobsearch@gmail.com",
    icon: (
      <FontAwesomeIcon icon={faEnvelope} className="contact__option-icon" />
    ),
    link: "mailto:jlcjobsearch@gmail.com",
    caption: "Send A Message!",
  },
  {
    field: "LinkedIn",
    info: "Jose Luis Cruz",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} className="contact__option-icon" />
    ),
    link: "https://www.linkedin.com/in/jose-luis-cruz-jr/",
    caption: "Connect With Me!",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_CLIENT_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option, index) => (
            <article key={index} className="contact__option">
              {option.icon}
              <h3>{option.field}</h3>
              <h2>{option.info}</h2>
              <a href={option.link} target="_blank" rel="noreferrer">
                {option.caption}
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email Address..."
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message..."
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
