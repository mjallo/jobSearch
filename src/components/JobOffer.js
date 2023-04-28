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

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    margin: "0 auto"
  };

  const labelStyles = {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold",
    fontSize: "18px"
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#f0f0f0",
    fontSize: "16px",
    marginBottom: "20px"
  };

  const buttonStyles = {
    backgroundColor: "#0077FF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer"
  };

  return (
    <div>
      <NavigationBar />
      <div style={styles}>
        <h1 style={{ marginBottom: "40px", fontSize: "32px" }}>Job Offer</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <label style={labelStyles}>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              value={jobData.jobTitle}
              onChange={(e) =>
                setJobData({ ...jobData, jobTitle: e.target.value })
              }
              style={inputStyles}
            />
          </label>
          <label style={labelStyles}>
            Job Description:
            <textarea
              name="jobDescription"
              placeholder="Enter job description"
              value={jobData.jobDescription}
              onChange={(e) =>
                setJobData({ ...jobData, jobDescription: e.target.value })
              }
              style={{ ...inputStyles, height: "200px" }}
            />
          </label>
          <button type="submit" style={buttonStyles}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobOffer;
