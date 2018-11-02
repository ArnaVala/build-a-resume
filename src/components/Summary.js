import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Summary({ summary, onInputChange, toggleHeader }) {
  return (
    <section className="page">
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">Summary</h1>
          <p className="page__subtitle">
            Next add a brief summary about yourself, family or cohabitants if applicable, and/or other information you want to share with the landlord.
          </p>
        </div>
        <button className="btn--header" onClick={toggleHeader}>
          <span />
        </button>
      </div>
      <fieldset id="summary" className="fieldset fieldset--summary">
        <textarea
          id="summary"
          className="textarea textarea--summary"
          name="summary"
          placeholder="Write summary here..."
          value={summary}
          onChange={event => onInputChange(event.target.value, ["summary"])}
        />
        <Link
          to="/employmenthistory"
          title="Employment History"
          className="page__link"
        >
          Continue...
        </Link>
      </fieldset>
    </section>
  );
}

Summary.propTypes = {
  summary: PropTypes.string,
  onInputChange: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Summary;
