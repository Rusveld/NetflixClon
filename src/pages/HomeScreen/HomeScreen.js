import React from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Nav/Banner";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      {/* Row */}
    </div>
  );
}

export default HomeScreen;
