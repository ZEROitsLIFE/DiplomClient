import React from "react";
import Carusel from "../../components/CARUSEL/Carusel";
import Contact from "../../components/CONTACT/Contact";
import Poslugi from "../../components/AcoutAc-Small/AboutUs_S";
import Prefence from "../../components/PREFENCE/Prefence";
import Timing from "../../components/TIMING/Timing";


const HomePage = () => {
  
  return (
    <div className="content">
      <Carusel />
      <br/>
      <Prefence />
      <Poslugi />
      <br/>
      <br/>
      <Timing/>
      <Contact/>
    </div>
  );
};

export default HomePage;
