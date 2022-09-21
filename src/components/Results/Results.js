import React from "react";

const Results = ({ currentResults, searchTerm, visibility, total }) => {
  return (
    <div
      className="results"
      style={visibility === "" ? { display: "none" } : { display: "flex" }}
    >
      <p className="results-term">Results for {searchTerm}</p>
      {currentResults.map((result, i) => (
        <a
          className="result-link"
          key={i}
          href={result.url}
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="result-title">{result.title}</h1>

          <p className="result-title">{result.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Results;
