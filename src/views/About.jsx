import React from "react";
import "./css/About.css";
import image from "../../src/assets/images/christian-bale-american-psycho.gif";

function About() {
  return (
    <div class="container mt-5 mb-5 d-flex center">
      <div class="row no-gutters">
        <div class="col-md-4 col-lg-4 view overlay zoom">
          <img src={image} alt="Loading....."></img>
        </div>
        <div class="col-md-8 col-lg-8">
          <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
              <h3 class="display-5">Mohy Dev</h3>
              <a
                href="https://www.linkedin.com/in/mohammed-mohy/"
                class="fa fa-linkedin text-decoration-none"
                target="_blank"
              ></a>
              <i class="fa fa-facebook"></i>
              <i class="fa fa-google"></i>
              <i class="fa fa-youtube-play"></i>
              <i class="fa fa-dribbble"></i>
            </div>
            <div class="p-3 bg-black text-white">
              <h6>Software Engineer &amp; Developer</h6>
            </div>
            <div class="d-flex flex-row text-white">
              <div class="p-4 bg-primary text-center skill-block mask  rgba-red-strong">
                <h6>React</h6>
              </div>
              <div class="p-3 bg-success text-center skill-block">
                <h6>Bootstrap</h6>
              </div>
              <div class="p-3 bg-warning text-center skill-block">
                <h6>HTML</h6>
              </div>
              <div class="p-3 bg-danger text-center skill-block">
                <h6>PHP</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
