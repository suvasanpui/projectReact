// src/App.jsx
import React from "react";
import homebg from "./assets/homebg.png";
import TopHeader from "./components/Headers/TopHeader";
import Navbar from "./components/Headers/Navbar";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Industries from "./components/Industries";

const App = () => {
  return (
    <div className=" bg-white">
      <TopHeader />
      <Navbar />
      <div className="relative">
        <img
          src={homebg}
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-1/3 w-full text-center text-white">
          <h1 className="text-4xl font-bold">
            The smartest way to manage your{" "}
            <span className="text-blue-400">last mile </span>transactions
          </h1>
          <p className="text-lg mt-2">
            Comprehensive solution combining the robust handheld terminals with
            intelligent software
          </p>
        </div>
      </div>
      <Statistics />
      <About/>
      <Industries/>
      <Footer />
    </div>
  );
};

export default App;
