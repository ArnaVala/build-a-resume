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
              <div>Resume Builder</div>
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
              to="/"
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
              title="Experience"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              title="Education"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Education
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
              Assets
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
