import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Homee from "./components/home";

const Home = () => <h1 className="text-center text-2xl mt-10">Home Page</h1>;
const About = () => <h1 className="text-center text-2xl mt-10">About Us</h1>;
const Team = () => <h1 className="text-center text-2xl mt-10">Team</h1>;
const Magazine = () => <h1 className="text-center text-2xl mt-10">Magazine</h1>;
const ArtistCorner = () => (
  <h1 className="text-center text-2xl mt-10">Artist Corner</h1>
);
const MusicFeatures = () => (
  <h1 className="text-center text-2xl mt-10">Music Features</h1>
);
const TopTrends = () => (
  <h1 className="text-center text-2xl mt-10">Top Trends</h1>
);
const Gallery = () => <h1 className="text-center text-2xl mt-10">Gallery</h1>;
const Contact = () => (
  <h1 className="text-center text-2xl mt-10">Contact Us</h1>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/artistcorner" element={<ArtistCorner />} />
        <Route path="/musicfeatures" element={<MusicFeatures />} />
        <Route path="/toptrends" element={<TopTrends />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Homee />
    </>
  );
}

export default App;
