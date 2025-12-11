import React from "react";
import Marquee from "react-fast-marquee";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="magazine-container">
        {/* First Row - Full Width Image */}
        <div className="image-card full-width">
          <img
            src="https://storage.googleapis.com/slicker/demo/SLICKER_FOOD_08.jpg"
            alt="Featured article"
            className="image"
          />
          <div className="overlay">
            <div className="overlay-text-container">
              <h2 className="title">New York Slicker Popup</h2>
              <p className="subtitle">- Richard</p>
              <p className="subtitle">Slicker launched a food popup in soho</p>
            </div>
          </div>
        </div>

        {/* Second Row - Two Images, Right Larger */}
        <div className="second-row">
          <div className="image-card">
            <img
              src="https://storage.googleapis.com/slicker/demo/SLICKER_FOOD_01.jpg"
              alt="Article 2"
              className="image"
            />
            <div className="overlay">
              <div className="overlay-text-container">
                <h3 className="title">Culture</h3>
                <p className="subtitle">Art in the digital age</p>
              </div>
            </div>
          </div>

          <div className="image-card large">
            <img
              src="https://storage.googleapis.com/slicker/demo/SLICKER_FOOD_05.jpg"
              alt="Article 3"
              className="image"
            />
            <div className="overlay">
              <div className="overlay-text-container">
                <h3 className="title">Food</h3>
                <p className="subtitle">Something that we all like</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rolling Text Marquee */}
        <div className="marquee-container">
          <Marquee speed={50} gradient={false}>
            <span className="marquee-text">SLICKER • </span>
            <span className="marquee-text">SLICKER • </span>
            <span className="marquee-text">SLICKER • </span>
            <span className="marquee-text">SLICKER • </span>
            <span className="marquee-text">SLICKER • </span>
            <span className="marquee-text">SLICKER • </span>
          </Marquee>
        </div>

        {/* Third Row - Square Left, Wide Right */}
        <div className="third-row">
          <div className="image-card square">
            <img
              src="https://storage.googleapis.com/slicker/demo/SLICKER_FOOD_04.jpg"
              alt="Article 4"
              className="image"
            />
            <div className="overlay">
              <div className="overlay-text-container">
                <h3 className="title">Style</h3>
                <p className="subtitle">Modern aesthetics</p>
              </div>
            </div>
          </div>

          <div className="image-card wide">
            <img
              src="https://storage.googleapis.com/slicker/demo/SLICKER_FOOD_02.jpg"
              alt="Article 5"
              className="image"
            />
            <div className="overlay">
              <div className="overlay-text-container">
                <h3 className="title">About Us</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
