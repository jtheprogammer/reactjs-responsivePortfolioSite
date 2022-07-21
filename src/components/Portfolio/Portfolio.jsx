import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Portfolio.css";
import Resume from "../../assets/Images/ReactJSResume/Resume-Home.jpg"
import Notes from "../../assets/Images/ReactDjangoNotes/Dark-Mode-UI.jpg"
import PortfolioApp from "../../assets/Images/MERNPortfolioApp/Portfolio-App.jpg"
import NativeApp from "../../assets/Images/ReactNativeNFTApp/React-Native-Expo.jpg";
import PromotionalApp from "../../assets/Images/PromotionalSite/Promotional-Site.jpg"
import Robinhood from "../../assets/Images/RobinhoodClone/Robinhood-UI.jpg";
import Crypto from "../../assets/Images/CryptoAPI/main.jpg";

const portfolioItems = [
  {
    image: Resume,
    title: "ReactJS Resume",
    description: "This resume app was created using ReactJS18 and deployed with Google Firebase. Key dependencies used include EmailJS, SwiperJS and FontAwesome.",
    link: "https://github.com/jtheprogammer/reactjs-responsivePortfolioSite",
  },
  {
    image: Notes,
    title: "ReactJS-Django Notes App",
    description: "A note storing app, resembling the Apple Notes app UI. CRUD operations are handled by a RESTful API built using Django REST Framework. Users can also toggle between a light and dark mode.",
    link: "https://github.com/jtheprogammer/react-django-notesApp",
  },
  {
    image: PortfolioApp,
    title: "MERN Portfolio Sharing App",
    description: "A social media-inspired app where users can share and like posts relating to their portfolio projects. CRUD operations are handled by an Express API. This app was styled using the Material-UI library.",
    link: "https://github.com/jtheprogammer/mern-portfolio-sharing-app",
  },
  {
    image: NativeApp,
    title: "React Native NFT Marketplace UI",
    description: "A React Native app built using the Expo CLI that displays a UI design for an NFT marketplace.",
    link: "https://github.com/jtheprogammer/react-native-nft-marketplace",
  },
  {
    image: PromotionalApp,
    title: "ReactJS App Promoting Site",
    description: "A website built using ReactJS for the purpose of promoting a mobile app. This app was styled using Tailwind CSS.",
    link: "https://github.com/jtheprogammer/react-native-app-promotional-site",
  },
  {
    image: Robinhood,
    title: "Robinhood Home UI",
    description: 'A Robinhood homepage clone that retrieves real-time stock price information from the Finnhub API using Axios. Google Firebase NoSQL database is used to track user stock data.',
    link: "https://github.com/jtheprogammer/reactjs-robinhood-clone",
  },
  {
    image: Crypto,
    title: "Crypto Tracker UI",
    description: "This ReactJS app retrieves real-time cryptocurrency information from the CoinGecko API using Axios. No API key needed, just download the source code from Github and try it out. Searching is case insensitive and uses the complete name of the crypto token.",
    link: "https://github.com/jtheprogammer/reactjs-cryptosearch-ui",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>The Projects I've Completed</h4>
      <h2>On My Programming Journey</h2>

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
