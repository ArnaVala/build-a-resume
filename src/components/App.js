import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import store from "store2";
import { tryParseJSON } from "../util/helpers";

import About from "./About";
import Applicant from "./Applicant";
import EmploymentHistory from "./EmploymentHistory";
import Header from "./Header";
import Home from "./Home";
import Preview from "./Preview";
import RentalHistory from "./RentalHistory";
import Summary from "./Summary";



const defaultState = {
  people: [
    {
      name: "",
      email: "",
      phone: ""
    }
  ],
  summary: "",
  employmentHistory: [
    {
      company: "",
      title: "",
      startDate: "",
      endDate: ""
    }
  ],
  rentalHistory: [
    {
      address1: "",
      address2: "",
      zip: "",
      city: "",
      dateStart: "",
      dateEnd: "",
      reason: ""
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

  componentDidMount() {
    store.set('data', this.state);
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

  printResume = () => {
    const app = document.getElementById('app');
    if (this.props.location.pathname !== '/preview') {
      this.context.router.push('/preview');
      setTimeout(() => {
        app.classList.remove('toggle--active');
        window.print();
      }, 500);
    } else {
      app.classList.remove('toggle--active');
      window.print();
    }
  };

  render() {
    return <div>
        {this.props.location.pathname !== "/" ? <Header {...this.props} printResume={this.printResume} toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} /> : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About {...this.props} toggleHeader={this.toggleHeader} closeMenu={this.closeMenu} />
          </Route>
          <Route path="/applicant">
            <Applicant {...this.props} people={this.state.people} onInputChange={this.onInputChange} onAddSection={this.onAddSection} onRemoveSection={this.onRemoveSection} toggleHeader={this.toggleHeader} />
          </Route>
          <Route path="/summary">
            <Summary {...this.props} summary={this.state.summary} onInputChange={this.onInputChange} toggleHeader={this.toggleHeader} />
          </Route>
          <Route path="/employmenthistory">
            <EmploymentHistory {...this.props} employmentHistory={this.state.employmentHistory} onInputChange={this.onInputChange} onAddSection={this.onAddSection} onRemoveSection={this.onRemoveSection} toggleHeader={this.toggleHeader} />
          </Route>
          <Route path="/rentalhistory">
            <RentalHistory {...this.props} rentalHistory={this.state.rentalHistory} onInputChange={this.onInputChange} onAddSection={this.onAddSection} onRemoveSection={this.onRemoveSection} toggleHeader={this.toggleHeader} />
          </Route>
          <Route path="/preview">
            <Preview {...this.props} people={this.state.people} summary={this.state.summary} employmentHistory={this.state.employmentHistory} rentalHistory={this.state.rentalHistory} toggleHeader={this.toggleHeader} />
          </Route>
        </Switch>
      </div>;
  }
}

export default App;
