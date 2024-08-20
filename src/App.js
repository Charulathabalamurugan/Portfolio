// src/App.js

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Achievements from "./components/Achievements";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Tools />
      <Achievements />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
