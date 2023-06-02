import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { LayOut } from "./components/Layout";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <LayOut />
      <div className="h-[0px]"></div>
    </div>
  );
};

export default App;
