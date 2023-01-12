import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Job Search Page
function JobSearch() {
  return (
    <div>
      <h1>Job Search</h1>
      <input placeholder="Search for jobs" />
      <button>Search</button>
    </div>
  );
}

//Job Offer Page
function JobOffer() {
  return (
    <div>
      <h1>Job Offer</h1>
      <form>
        <label>
          Job Title:
          <input type="text" name="jobTitle" placeholder="Enter job title" />
        </label>
        <br />
        <label>
          Job Description:
          <textarea name="jobDescription" placeholder="Enter job description" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//App
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
