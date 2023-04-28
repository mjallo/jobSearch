import React from "react";
import NavigationBar from "./NavigationBar";

function JobSearch() {
  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "2rem" }}>
      <NavigationBar />
      <h1 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Job Search</h1>
      <form style={{ display: "flex" }}>
        <input
          style={{
            padding: "1rem",
            border: "none",
            borderRadius: "5px 0 0 5px",
            flex: "1",
            marginRight: "-1px"
          }}
          placeholder="Search for jobs"
        />
        <button
          style={{
            backgroundColor: "#00b8d4",
            color: "#fff",
            padding: "1rem",
            border: "none",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out"
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default JobSearch;
