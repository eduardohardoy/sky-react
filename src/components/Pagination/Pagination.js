import React from "react";

const Pagination = ({ resultPerPage, totalResults, paginate, visibility }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul
      className="pagination"
      style={visibility === "" ? { display: "none" } : { display: "flex" }}
    >
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
