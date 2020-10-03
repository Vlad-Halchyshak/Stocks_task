import React from "react";

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  let pagesCount = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers
          .filter((number) => number <= 15)
          .map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};
