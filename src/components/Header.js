import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

function Header({ toggleMenu, closeMenu }) {
  return (
    <header className="header">
      <Link className="logo--mobile" to="/" onClick={closeMenu}>
        Resume Builder
      </Link>
      <button className="toggle" onClick={toggleMenu}>
        <span className="toggle__bars" />
      </button>
      <nav className="nav">
        <ul>
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>
              <div>Renters Resume</div>
            </h1>
          </Link>
          <li>
            <NavLink
              to="/applicant"
              title="Applicant"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Applicant
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/summary"
              title="Summary"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Summary
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              title="Employment"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Employment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              title="Rental"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Rental History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              title="Assets"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Income
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  toggleMenu: PropTypes.func,
  closeMenu: PropTypes.func
};

export default Header;
