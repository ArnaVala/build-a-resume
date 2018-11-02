import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class EmploymentHistory extends Component {
  renderHistory = (history, index) => {
    const { onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <input
          id={`company-title${index > 0 ? `-employment-section-${index}` : ""}`}
          className="input input--title"
          name="company-title"
          autoComplete="company-title"
          placeholder="Title *"
          type="text"
          value={history.title}
          onChange={event =>
            onInputChange(event.target.value, [
              "employmentHistory",
              index,
              "title"
            ])
          }
        />
        <input
          id={`company${index > 0 ? `-employment-section-${index}` : ""}`}
          className="input input--employer"
          name="company"
          autoComplete="company"
          placeholder="Employer *"
          type="text"
          value={history.company}
          onChange={event =>
            onInputChange(event.target.value, [
              "employmentHistory",
              index,
              "company"
            ])
          }
        />
        <input
          id={`start-date-employment-section-${index}`}
          className="input input--start-date"
          name="start-date"
          placeholder="Start Date *"
          type="text"
          value={history.startDate}
          onChange={event =>
            onInputChange(event.target.value, [
              "employmentHistory",
              index,
              "startDate"
            ])
          }
        />
        <input
          id={`end-date-employment-section-${index}`}
          className="input input--end-date"
          name="end-date"
          placeholder="End Date *"
          type="text"
          value={history.endDate}
          onChange={event =>
            onInputChange(event.target.value, [
              "employmentHistory",
              index,
              "endDate"
            ])
          }
        />
        {index > 0 ? (
          <button
            id={`remove-employment-section-${index}`}
            className="btn btn--remove"
            onClick={event =>
              onRemoveSection(event, "employmentHistory", index)
            }
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  };

  render() {
    const { employmentHistory, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Employment History</h1>
            <p className="page__subtitle">
              Next you should provide the landlord with a brief history of your employment. A record of approximately the last 5 years should be sufficient.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span/>
            </button>
          </div>
        </div>
        <fieldset id="employment" className="fieldset fieldset--employment">
          <ol className="ol ol--employment">
            {employmentHistory.map(this.renderHistory)}
            <button
              id="add-employment-section"
              className="btn btn--add"
              onClick={event => onAddSection(event, 'employmentHistory')}
            >
            Add Job
            </button>
          </ol>
          <Link
            to="/rentalhistory"
            title="Rental History"
            className="page__link"
          >
            Continue...
          </Link>
        </fieldset>
      </section>
    );
  }
}

EmploymentHistory.propTypes = {
  employmentHistory: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default EmploymentHistory;
