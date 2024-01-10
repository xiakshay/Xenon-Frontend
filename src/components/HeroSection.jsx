import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
        <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Study</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Enjoy</h1>
                <h1 className="title dishes_title">Sleep</h1>
                {/* <img src="/threelines.svg" alt="three" /> */}
              </div>
              <img src="https://cdn.tinybuddha.com/wp-content/uploads/2015/01/Enjoy.jpg" alt="logo" className="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://casperblog.imgix.net/wp-content/uploads/2022/08/how-to-sleep-through-the-night_thumb.png?auto=format" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Sleep</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;