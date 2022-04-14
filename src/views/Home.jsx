import React from "react";
import "./css/Home.css";
import "./css/OutPage.css";
import "../components/YouTubeVideo/Youtube.css";

const Home = ({ embedId }) => {
  return (
    <a>
      <header class="top-header"></header>

      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>
      <div class="App">
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </a>
  );
};

export default Home;
