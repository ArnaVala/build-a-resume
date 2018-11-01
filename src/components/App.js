import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import store from "store2";
import { tryParseJSON } from "../util/helpers";

import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Applicant from "./Applicant";

const defaultState = {
  people: [
    {
      name: "",
      email: "",
      phone: ""
    }
  ],
};

class App extends Component {
  constructor(props) {
    super(props);

    const fromSaveLink = tryParseJSON(props.location && props.location.search);
    if (fromSaveLink) {
      this.state = fromSaveLink;
    } else {
      this.state = store.get("data") || defaultState;
    }
  }

  onInputChange = (value, key) => {
    const newState = cloneDeep(this.state);
    set(newState, key, value);
    this.setState(newState);
    store.set("data", newState);
  };

  onAddSection = (event, section) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[section].push(defaultState[section][0]);
    this.setState(newState);
    store.set("data", newState);
  };

  onRemoveSection = (event, section, index) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[section].splice(index, 1);
    this.setState(newState);
    store.set("data", newState);
  };

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
          <Route path="/applicant">
            <Applicant
              {...this.props}
              people={this.state.people}
              onInputChange={this.onInputChange}
              onAddSection={this.onAddSection}
              onRemoveSection={this.onRemoveSection}
              toggleHeader={this.toggleHeader}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
