import React, { useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
//import { Link } from "react-router-dom";

function JobOffer() {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobDescription: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://api-endpoint.com/jobs",
        jobData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <h1>Job Offer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter job title"
            value={jobData.jobTitle}
            onChange={(e) =>
              setJobData({ ...jobData, jobTitle: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Job Description:
          <textarea
            name="jobDescription"
            placeholder="Enter job description"
            value={jobData.jobDescription}
            onChange={(e) =>
              setJobData({ ...jobData, jobDescription: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JobOffer;
