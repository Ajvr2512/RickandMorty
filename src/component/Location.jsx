import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <div className="bg-[#062226] text-white">
      <h2 className="flex justify-center text-[35px]">{name}</h2>
      <ul className="ContainerLocation">
        <li>
          <span>Type: </span>
          {type}
        </li>
        <li>
          <span>Dimension: </span>
          {dimension}
        </li>
        <li>
          <span>Population: </span>
          {residents.length}
        </li>
      </ul>
    </div>
  );
};

export default Location;
