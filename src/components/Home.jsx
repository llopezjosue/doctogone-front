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
            <h1>Hello, </h1>
            <p>tell us who you are ?</p>
          </div>
          <Link to="/login" type="button">
            <div className="button light">
              <img src="/icons/fleche-green.svg"></img>
              <p>I'm a patient</p>
            </div>
          </Link>
          <Link to="/login2" type="button">
            <div className="button">
              <img src="/icons/fleche-white.svg"></img>
              <p>I'm a caregiver</p>
            </div>
          </Link>
          <div className="item">
            <p>I' already have account'</p>
          </div>
        </section>

        <div className="illustration-home">
          <img src="/img/home.png"></img>
        </div>

        <div></div>
      </div>

      <div className="light">
        <div className="container">
          <h1>Why l'application</h1>
          <p>
            pour pouvoir gagner des casques et des clavier et revendre pour un million
            notre application
          </p>
          <div className="button">
            <img src="/icons/fleche-white.svg"></img>
            <p>I'm a caregiver</p>
          </div>
        </div>
      </div>

      <div className="img-block">
        <img src="/img/home-2.png"></img>
      </div>

      <div className="data-number">
        <h1>24 5346</h1>
        <p>le nombre de malade atteind de blablbalab</p>

        <p className="copyright">Copyright - 2020 balbalbal</p>
      </div>
    </div>
  );
}

export default Home;
