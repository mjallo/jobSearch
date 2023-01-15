import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobOffer from "./JobOffer";
import JobSearch from "./JobSearch";
//import QRCodeGenerator from "./QRCodeGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element=<JobSearch /> />
        <Route path="/job-offer" element=<JobOffer /> />
      </Routes>
    </Router>
  );
}

export default App;
