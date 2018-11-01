import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

function Header({ toggleMenu, closeMenu }) {
  return (
    <header className="header">
      <Link className="logo--mobile" to="/" onClick={closeMenu}>
        Renters Resume
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
              to="/employmenthistory"
              title="Employment History"
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
              title="Income"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              title="References"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines btn--nav__lines--last" />
              References
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/preview"
              title="preview"
              className="btn--preview"
              onClick={closeMenu}
            >
              <svg width="1024" height="1024" viewBox="0 0 1024 1024">
                <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z" />
              </svg>
              Preview
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
