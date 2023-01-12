import React from "react";

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

export default JobOffer;
