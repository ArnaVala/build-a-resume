import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Income({ income, onInputChange, toggleHeader }) {
  return (
    <section className="page">
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">Income</h1>
          <p className="page__subtitle">
            Next inform about your annual household income.
          </p>
          <button className="btn--header" onClick={toggleHeader}>
            <span />
          </button>
        </div>
      </div>
      <fieldset className="fieldset fieldset--income">
        <div className="input-group">
          <span className="input-prefix">€</span>
          <input
            id="income"
            className="input input--income"
            name="income"
            type="number"
            step="1000"
            placeholder="Annual Income"
            value={income}
            onChange={event => onInputChange(event.target.value, ["income"])}
          />
        </div>
        <Link to="/references" title="References" className="page__link">
          Continue...
        </Link>
      </fieldset>
    </section>
  );
}

Income.propTypes = {
  income: PropTypes.string,
  onInputChange: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Income;
