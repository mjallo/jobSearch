import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobOffer from "./JobOffer";
import JobSearch from "./JobSearch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={JobSearch} />
        <Route path="/job-offer" component={JobOffer} />
      </Switch>
    </Router>
  );
}

export default App;
