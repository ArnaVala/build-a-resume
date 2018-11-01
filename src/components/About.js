import React from "react";
import { Link } from "react-router-dom";

function About() {
  return <section className="page">
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">About</h1>
        </div>
      </div>
      <ul className="faq">
        <li>
          <span className="faq__question">What is Renters Resume?</span>
          <p>
          This is a simple SPA made in React. Renters Resume is a personal project made as proof of concept and for learning purposes. Landing page illustration and built by {" "} <Link to="https://github.com/arnavala/" target="_blank" rel="noopener noreferrer">
              Arna Vala.
            </Link>
          </p>
        </li>

        <Link to="/applicant" title="Applicant" className="page__link page__link--about">
          Get Started
        </Link>
      </ul>
    </section>;
}
export default About;
