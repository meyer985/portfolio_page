import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import Main from "../Main/Main";
import Portfolio from "../Portfolio/Portfolio";

function Landing(props) {
  return (
    <>
      <Header isLoggedIn={false} isMainPage={true} />
      <Main>
        <AboutMe />
        <Techs />
        <Portfolio />
      </Main>
      <Footer />
    </>
  );
}

export default Landing;
