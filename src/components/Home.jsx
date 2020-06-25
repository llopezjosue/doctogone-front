import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="logo">
          <img src="/icons/logo-2.svg"></img>
        </div>
        <section className="item">
          <div className="item-text">
            <h1>Hello !</h1>
            <p>Tell us who you are</p>
          </div>
          <Link to="/login" type="button">
            <div className="button light">
              <img src="/icons/fleche-green.svg"></img>
              <p>I am a patient</p>
            </div>
          </Link>
          <Link to="/login2" type="button">
            <div className="button">
              <img src="/icons/fleche-white.svg"></img>
              <p>I am a caregiver</p>
            </div>
          </Link>
        </section>

        <div className="illustration-home">
          <img src="/img/home.png"></img>
        </div>

        <div></div>
      </div>

      <div className="light">
        <div className="container">
          <h1>Why Finding Memo ? </h1>
          <p>
          To support our loved ones through Alzheimer's
          </p>
          <div className="button">
            <img src="/icons/fleche-white.svg"></img>
            <p>More information</p>
          </div>
        </div>
      </div>

      <div className="img-block">
        <img src="/img/home-2.png"></img>
      </div>

      <div className="data-number">
        <h1>50 million</h1>
        <p>The number of Alzheimer's patients in the World</p>
        <h1>100 million</h1>
        <p>Projected number of Alzheimer's patients in 2040</p>
        <h1>$250,174</h1>
        <p>The total lifetime cost estimation of care for someone with Alzheimer dementia in 2018.</p>

        <p className="copyright">Copyright - 2020 Doctogone</p>
      </div>
    </div>
  );
}

export default Home;
