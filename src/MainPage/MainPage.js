import React from "react";
import "./MainPage.css";
import Career from "./Career/Career";
import Welcome from "./WelcomePage/Welcome";
import LanguageSwitcher from '../components/LanguageSwitcher';
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe.js";

export function MainPage() {
  return (
    <div>
      <div id="mainPage">
        <header className="App-header">
          <LanguageSwitcher />
        </header>
        <Welcome />
        <div className="wave-holder">
        <div className="wave"/>
        </div>
        <Career />
        <Skills />
        <AboutMe />
        <div className="wave-holder">
        <div className="wave-invert"/>
        </div>
        <ContactMe/>
      </div>
    </div>
  );
}
