import React from "react";
import { Routes, Route } from "react-router-dom";
import nftpage from "./components/nftpage";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import TrendingSection from "./components/Trendingsection";
import TopCreators from "./components/Topcreators";
import DiscoverMoreNFTs from "./components/DiscoverMoreNFTs";
import HowItWorks from "./components/Howitwork";
import Footer from "./components/footer";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import BrowseCategories from "./components/Browsecategories";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TrendingSection />
              <TopCreators />
              <BrowseCategories />
              <DiscoverMoreNFTs />
              <HowItWorks />
            </>
          }
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
