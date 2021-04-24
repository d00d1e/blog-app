import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import PageRenderer from "./page-renderer";
import Navigation from "./components/Navigation";

import "./assets/scss/base.scss";

export default function App() {
  const user = {
    firstName: "Moose",
    lastName: "Lee",
  };

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" reder={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}
