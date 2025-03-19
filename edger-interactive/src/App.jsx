// src/App.jsx
import React from "react";
import TopHeader from "./components/Headers/TopHeader";
import Navbar from "./components/Headers/Navbar";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Industries from "./components/Industries";
import Homebg from "./components/Homebg";

const App = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Homebg/>
      <Statistics />
      <About />
      <Industries />
      <Footer />
    </div>
  );
};

export default App;
