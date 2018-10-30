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
          <span className="faq__question">What is Resume Builder?</span>
          <p>
          This site is still being developed. It is made as a proof of concept by  {" "} <Link to="https://github.com/arnavala/" target="_blank" rel="noopener noreferrer">
              Arna Vala
            </Link>
          </p>
        </li>

        <Link to="/" title="Applicant" className="page__link page__link--about">
          Get Started
        </Link>
      </ul>
    </section>;
}
export default About;
