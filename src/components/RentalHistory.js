import React, { Component } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

class RentalHistory extends Component {
  renderHistory = (history, index) => {
    const { onInputChange, onRemoveSection } = this.props;

    return (
      <li key={index}>
        <input
          id={`address-line1${index > 0 ? `-rental-section-${index}` : ""}`}
          className="input input--street"
          name="address-line1"
          autoComplete="shipping address-line1"
          placeholder="Address *"
          type="text"
          value={history.address1}
          onChange={event =>
            onInputChange(event.target.value, [
              "rentalHistory",
              index,
              "address1"
            ])
          }
        />
        <input
          id={`address-line2${index > 0 ? `-rental-section-${index}` : ""}`}
          className="input input--apartment"
          name="address-line2"
          autoComplete="shipping address-line2"
          placeholder="Apt no."
          type="text"
          value={history.address2}
          onChange={event =>
            onInputChange(event.target.value, [
              "rentalHistory",
              index,
              "address2"
            ])
          }
        />
        <InputMask
          id={`postal-code${index > 0 ? `-rental-section-${index}` : ""}`}
          className="input input--zip"
          name="postal-code"
          autoComplete="shipping postal-code"
          placeholder="Postal Code *"
          type="text"
          value={history.zip}
          mask="99999"
          maskChar={null}
          onChange={event =>
            onInputChange(event.target.value, ["rentalHistory", index, "zip"])
          }
        />

        <input
          id={`address-level2${index > 0 ? `-rental-section-${index}` : ""}`}
          className="input input--city"
          name="address-level2"
          autoComplete="shipping address-level2"
          placeholder="City *"
          type="text"
          value={history.city}
          onChange={event =>
            onInputChange(event.target.value, ["rentalHistory", index, "city"])
          }
        />
        
        <input
          id={`start-date${index > 0 ? `-rental-section-${index}` : ""}`}
          className="input input--start-date"
          name="start-date"
          placeholder="Move In Date *"
          type="text"
          value={history.startDate}
          onChange={event =>
            onInputChange(event.target.value, [
              "rentalHistory",
              index,
              "startDate"
            ])
          }
        />
        <input
          id={`end-date${index > 0 ? `-rental-section-${index}` : ""}`}
          className="input input--end-date"
          name="end-date"
          placeholder="Move Out Date*"
          type="text"
          value={history.endDate}
          onChange={event =>
            onInputChange(event.target.value, [
              "rentalHistory",
              index,
              "endDate"
            ])
          }
        />
        <textarea
          id={`leaving-reason${index > 0 ? `-rental-section-${index}` : ""}`}
          className="textarea textarea--reason"
          name="leaving-reason"
          placeholder="Reason For Leaving"
          type="text"
          value={history.reason}
          onChange={event =>
            onInputChange(event.target.value, [
              "rentalHistory",
              index,
              "reason"
            ])
          }
        />
        {index !== 0 ? (
          <button
            id={`remove-rental-section-${index}`}
            className="btn btn--remove"
            onClick={event => onRemoveSection(event, "rentalHistory", index)}
          >
            <span />
          </button>
        ) : null}
      </li>
    );
  };

  render() {
    const { rentalHistory, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Rental History</h1>
            <p className="page__subtitle">
              Now please list your most recent places of residence. 2 to 3 places are sufficient and no further than 10 years back.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="rent" className="fieldset fieldset--rent">
          <ol className="ol ol--rent">
            {rentalHistory.map(this.renderHistory)}
            <button
              id="add-rental-section"
              className="btn btn--add"
              onClick={event => onAddSection(event, "rentalHistory")}
            >
              Add Residence
            </button>
          </ol>
          <Link to="/income" title="Income" className="page__link">
            Continue...
          </Link>
        </fieldset>
      </section>
    );
  }
}

RentalHistory.propTypes = {
  rentalHistory: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func
};

export default RentalHistory;