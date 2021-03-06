import React, { Component } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

class Applicant extends Component {
  renderPerson = (person, index) => {
    const { onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <input
          id={`name${index > 0 ? `-contact-section-${index}` : ""}`}
          className="input input--full-name"
          name="name"
          autoComplete="name"
          placeholder="Full Name *"
          type="text"
          value={person.name}
          onChange={event =>
            onInputChange(event.target.value, ["people", index, "name"])
          }
        />
        <input
          id={`email${index > 0 ? `-contact-section-${index}` : ""}`}
          className="input input--email"
          name="email"
          autoComplete="email"
          placeholder="Email *"
          type="email"
          value={person.email}
          onChange={event =>
            onInputChange(event.target.value, ["people", index, "email"])
          }
        />
    
        <InputMask
          id={`tel${index > 0 ? `-contact-section-${index}` : ""}`}
          className="input input--phone"
          name="tel"
          autoComplete="home tel"
          placeholder="Phone Number *"
          type="text"
          value={person.phone}
          mask="(+999) 999999999"
          maskChar=" "
          onChange={event =>
            onInputChange(event.target.value, ["people", index, "phone"])
          }
        />

        {index > 0 ? (
          <button
            id={`remove-contact-section-${index}`}
            className="btn btn--remove"
            onClick={event => onRemoveSection(event, "people", index)}
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  };

  render() {
    const { people, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Applicant</h1>
            <p className="page__subtitle">
              First things first. Please fill in the information for all potential residents, 18 years and older.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="contact" className="fieldset fieldset--contact">
          <ol className="ol ol--applicant">
            {people.map(this.renderPerson)}
            <button
              className="btn btn--add"
              onClick={event => onAddSection(event, "people")}
            >
              Add Person
            </button>
          </ol>
          <Link to="/summary" title="Summary" className="page__link">
            Continue...
          </Link>
        </fieldset>
      </section>
    );
  }
}

Applicant.propTypes = {
  people: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default Applicant;
