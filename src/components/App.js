/* globals window, document */
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import About from './About'
import Header from './Header';
import Home from "./Home";


class App extends Component {
  
  toggleMenu() {
    const app = document.getElementById("app");
    app.classList.toggle("toggle--active");
  }

  toggleHeader() {
    const app = document.getElementById("app");
    app.classList.toggle("btn--header--active");
  }

  closeMenu() {
    const app = document.getElementById("app");
    app.classList.remove("toggle--active");
  }

  render() {
    return (
      <div>
        {this.props.location.pathname !== "/" ? (
          <Header
            {...this.props}
            toggleMenu={this.toggleMenu}
            closeMenu={this.closeMenu}
          />
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About
              {...this.props}
              toggleHeader={this.toggleHeader}
              closeMenu={this.closeMenu}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
