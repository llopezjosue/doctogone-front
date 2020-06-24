import React from "react";
import "./Home.scss";
import logoApp from "../img/twitter.png";

function Home() {
  return (
    <div className="home">
      <div className="item">
        <img src={logoApp} alt="logo app" />
        <p>
          FINDING <span>MEMO</span>
        </p>
      </div>
      <section className="item">
        <div className="item">
          <p>HELLO,</p>
          <p>tell us who you are ?</p>
        </div>
        <div className="button">
          <img src={logoApp} alt="arrow" />
          <p>I'm a patient</p>
        </div>
        <div className="button">
          <img src={logoApp} alt="arrow" />
          <p>I'm a caregiver</p>
        </div>
      </section>
      <div className="item">
        <img src={logoApp} alt="account" />
        <p>I' already have account'</p>
      </div>
    </div>
  );
}

export default Home;
