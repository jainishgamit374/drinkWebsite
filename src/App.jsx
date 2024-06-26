import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Marque from "./Components/Marque";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Components/Footer";
import Athletes from "./Components/Athletes";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-full w-full overflow-hidden">
      <Navbar />
      <Home />
      <Marque />
      <Athletes />
      <Footer/>
    </div>
  );
};

export default App;
