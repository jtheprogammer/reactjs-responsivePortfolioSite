import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Portfolio.css";
import Resume from "../../assets/Images/ReactJSResume/Resume-Home.jpg"
import Notes from "../../assets/Images/ReactDjangoNotes/Dark-Mode-UI.jpg"
import PortfolioApp from "../../assets/Images/MERNPortfolioApp/Portfolio-App.jpg"
import NativeApp from "../../assets/Images/ReactNativeNFTApp/React-Native-Expo.jpg";
import Crypto from "../../assets/Images/CryptoAPI/main.jpg";
import { ActiveNavContext } from "../../context";
import ProjectClientManager from "../../assets/Images/project-client-manager.png"
import ReactCalendar from "../../assets/Images/react-calendar.png"
import NextGraphBlog from "../../assets/Images/next-graphql-blog.png"

const baseGhUrl = "https://github.com/jtpgmr"
const portfolioItems = [
  {
    image: Resume,
    title: "My Website",
    description: "This custom website was created using ReactJS18 and deployed with Google Firebase",
    link: `${baseGhUrl}/reactjs-responsivePortfolioSite`,
  },
  {
    image: Notes,
    title: "ReactJS-Django-Mongo Notes App",
    description: "An Apple Notes-inspired app. CRUD operations are handled by a RESTful API built using Django REST Framework. Users can also toggle between a light and dark mode.",
    link: `${baseGhUrl}/react-django-notesApp`,
  },
  {
    image: PortfolioApp,
    title: "MERN Portfolio Sharing App",
    description: "A social media-inspired app where authorized users can share and like posts. CRUD operations are handled by an API built on ExpressJS, and data is stored with MongoDB. Users are able to signup manually (via JWT) or through Google (OAuth). This app was styled using the Material-UI library.",
    link: `${baseGhUrl}/mern-portfolio-sharing-app`,
  },
  {
    image: ProjectClientManager,
    title: "MERNG Project-Client Manager",
    description: 'A multi-page app where users can keep track of their existing projects, along with their associated clients. Data querying and mutations, along with project-client referencing, are handled using Apollo GraphQL. This app is styled using Bootstrap.',
    link: `${baseGhUrl}/reactjs-robinhood-clone`,
  },
  {
    image: NextGraphBlog,
    title: "NextJS-GraphQL Blog",
    description: 'A multi-page app where users can keep track of their existing projects, along with their associated clients. Data querying and mutations, along with project-client referencing, are handled using Apollo GraphQL. This app is styled using Bootstrap.',
    link: `${baseGhUrl}/reactjs-robinhood-clone`,
  },
  {
    image: ReactCalendar,
    title: "React-Tailwind Calendar",
    description: 'A calendar app built from scratch on React and styled with TailwindCSS. The code for this project exists in both JavaScript and TypeScript.',
    link: `${baseGhUrl}/reactjs-robinhood-clone`,
  },
  {
    image: Crypto,
    title: "Crypto Tracker UI",
    description: "This ReactJS app retrieves real-time cryptocurrency information from the CoinGecko API using Axios. No API key needed, just download the source code from Github and try it out. Searching is case insensitive and uses the complete name of the crypto token.",
    link: `${baseGhUrl}/reactjs-cryptosearch-ui`,
  },
  {
    image: NativeApp,
    title: "React Native NFT Marketplace UI",
    description: "A React Native app built using the Expo CLI that displays a UI design for an NFT marketplace.",
    link: `${baseGhUrl}/react-native-neft-marketplace`,
  },
];

const Portfolio = () => {
  const { portfolioRef } =
  useContext(ActiveNavContext);
  return (
    <section id="portfolio" ref={portfolioRef}>
        <div className="section__header" >
      <h4>The Projects I've Completed</h4>
      <h2>On My Programming Journey</h2>
      </div>

      <div className="container portfolio__container">
        {portfolioItems.map((item, index) => (
          <article key={index} className="portfolio__item">
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
