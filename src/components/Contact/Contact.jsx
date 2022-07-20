import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "jlc_resume",
        "template_s2z87q9",
        form.current,
        "7ersKOikKD_orZHNs"
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
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contact__option-icon"
            />
            <h3>Email</h3>
            <h4>jlcjobsearch@gmail.com</h4>
            <a href="mailto:jlcjobsearch@gmail.com">Send A Message!</a>
          </article>
          <article className="contact__option">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact__option-icon"
            />
            <h3>LinkedIn</h3>
            <h4>Jose Luis Cruz</h4>
            <a href="https://www.linkedin.com/in/jose-luis-cruz-9a0677220/" 
              target="_blank"
              rel="noreferrer"
            >
              Connect With Me!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
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
