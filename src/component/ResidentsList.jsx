import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({ residents }) => {
  const [quantity, setQuantity] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(residents.length / quantity);
  const lowerLimit = (currentPage - 1) * quantity;
  const upperLimit = currentPage * quantity - 1;

  const ResidentSlice = residents.slice(lowerLimit, upperLimit + 1);

  const nextPage = () => {
    const newPage = currentPage + 1;
    if (newPage <= totalPages) setCurrentPage(newPage);
  };

  const previousPage = () => {
    const newPage = currentPage - 1;
    if (newPage >= 1) setCurrentPage(newPage);
  };
  const pages = Array(totalPages).fill().map((_, i) => i + 1);

  const changePage = (newPage) => {
    if (newPage < 1) setCurrentPage(1);
    else if (newPage > totalPages) setCurrentPage(totalPages);
    else setCurrentPage(newPage);
  };

  return (
    <section>
      <div className="ListResident">
        {residents.length > 0
          ? ResidentSlice.map((resident) => (
              <ResidentInfo key={resident} urlResident={resident} />
            ))
          : 'There are no residents!!!'}
      </div>
      <div className="ContainerButton">
        <button className="ButtonPreNext" onClick={previousPage}>Previous </button>
        {pages.map((page) => (
          <button
            onClick={() => changePage(page)}
            className={"buttonPage " + (page === currentPage ? "ButtonAct" : "")}
            key={page}
          >
            {page}
          </button>
        ))}
        <button className="ButtonPreNext" onClick={nextPage}> Next</button>
      </div>
    </section>
  );
};

export default ResidentsList;
