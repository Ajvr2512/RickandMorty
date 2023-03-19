import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    <div className="Resident">
      {residentInfo && (
        <article className="bg-[#062226] m-[15px]">
          <div>
            <img src={residentInfo.image} alt={residentInfo.name} />
          </div>
          <h3 className="text-[28px]">
            {residentInfo.name}
            <hr className="bg-[#05292E]" />
          </h3>
          <ul>
            <li>
              <span>Specie: </span>
              {residentInfo.species}
            </li>
            <li>
              <span>Status: </span>
              {residentInfo.status}
            </li>
            <li>
              <span>Origin: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span> Appearances in episodes: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </div>
  );
};

export default ResidentInfo;
