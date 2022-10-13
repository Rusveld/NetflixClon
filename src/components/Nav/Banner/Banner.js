import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "black",
        // backgroundImage:
        //   'url("https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/1e83ca74-1157-4714-98a1-38e052114cd4/BY-ru-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg")',
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="bunner__description">this is test description</h1>
      </div>

      <div className="banner--fade-bottom"></div>
    </header>
  );
}

export default Banner;
