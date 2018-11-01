import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="home">
        <div className="home__text">
          <h2 className="home__text__title">Renters Resume</h2>
          <Link to="/about" className="btn btn--more">
            Learn More
          </Link>
          <Link to="/applicant" className="btn btn--start">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
