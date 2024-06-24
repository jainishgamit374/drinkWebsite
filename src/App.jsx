import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Marque from "./Components/Marque";
import LocomotiveScroll from "locomotive-scroll";
import Canvas from "./Components/Canvas";
import Footer from "./Components/Footer";


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar />
      <Home />
      <Marque />
      <Canvas />
      <Footer/>
    </div>
  );
};

export default App;
