/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 * and if you dont have a resume just use the sample for now
 * but its stupid that you dont have a resume make one ASAP
 */
const siteProps = {
  name: "Ghulam Murtaza Kazi",
  title: "Developer",
  email: "ghulammurtazaqazi1@gmail.com",
  gitHub: "https://github.com/GhulamMurtazaKazi",
  instagram: "https://instagram.com/ghulammurtazakazi?igshid=M2RkZGJiMzhjOQ==",
  linkedIn: "https://www.linkedin.com/in/ghulam-murtaza-qazi-815804290/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BlQTHCeZKRc%2BBe%2FyrD64oGA%3D%3D",
  medium: "",
  twitter: "https://x.com/GhulamM17078721?t=1_YU0c2KnnwUKOwaTO1S5w&s=09",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
