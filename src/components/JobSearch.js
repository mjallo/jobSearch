import React from "react";
import NavigationBar from "./NavigationBar";

function JobSearch() {
  return (
    <div>
      <NavigationBar />
      <h1>Job Search</h1>
      <input placeholder="Search for jobs" />
      <button>Search</button>
    </div>
  );
}

export default JobSearch;
