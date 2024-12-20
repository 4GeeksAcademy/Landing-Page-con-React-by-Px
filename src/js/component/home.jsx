import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Jumbotron">
        <Jumbotron />
      </div>
      <div className="Cards">
        <Cards />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;