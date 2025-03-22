import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Homee from "./components/home";
import Teamm from "./components/team";
import Mag from "./components/mag";
import Music from "./components/music";
import Trends from "./components/trends";
import About from "./components/about";
import Artist from "./components/artist";
import Contact from "./components/contact";
import Gallery from "./components/gallary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/home" element={<Homee />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/team" element={<Teamm />} />
        <Route path="/magazine" element={<Mag />} />
        <Route path="/artistcorner" element={<Artist />} />
        <Route path="/musicfeatures" element={<Music />} />
        <Route path="/toptrends" element={<Trends />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
