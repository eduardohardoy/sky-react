import React from "react";

const Results = ({ currentResults, searchTerm, visibility, total }) => {
  return (
    <div
      className="results"
      style={visibility === "" ? { display: "none" } : { display: "flex" }}
    >
      <p className="results-term">Search Results for "{searchTerm}"</p>
      <p className="results-total">{total} results</p>
      {currentResults.map((result, i) => (
        <div className="result-item">
          <a
            className="result-link"
            key={i}
            href={result.url}
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="result-title">{result.title}</h1>

            <p className="result-description">{result.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;
