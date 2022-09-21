import React, { useState, useEffect } from "react";

// API
import { getArticles } from "../api/Articles";

// Hooks
import usePagination from "../hooks/usePagination";

// Components
import Results from "../components/Results/Results";
import Pagination from "../components/Pagination/Pagination";

const HelpSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [resultPerPage] = useState(10);
  const [currentResults, paginate, totalResult] = usePagination(
    results,
    resultPerPage
  );

  useEffect(() => {
    const setUp = async () => {
      const articles = await getArticles(query);
      if (articles.results) {
        setResults(articles.results);
      }
    };
    setUp();
  }, [query]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    const encodedTerm = encodeURI(searchTerm);
    setQuery(encodedTerm);
  };

  // click submit
  const clickSubmit = () => {
    handleSubmit();
  };

  // click enter
  const clickEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <main>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={clickEnter}
        />

        <button className="search-button" type="submit" onClick={clickSubmit}>
          Search
        </button>
      </div>

      <Results
        visibility={query}
        currentResults={currentResults}
        searchTerm={searchTerm}
        total={totalResult}
      />
      <Pagination
        visibility={query}
        resultPerPage={resultPerPage}
        totalResults={totalResult}
        paginate={paginate}
      />
    </main>
  );
};

export default HelpSearch;
