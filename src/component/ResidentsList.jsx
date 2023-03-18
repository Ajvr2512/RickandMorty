import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({ residents }) => {
  return (
    <section className="ResidentsCard">
      {residents.length > 0
        ? residents.map((resident) => (
            <ResidentInfo key={resident} urlResident={resident} />
          ))
        : 'There are no residents!!!'}
    </section>
  );
};

export default ResidentsList;
