import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Random } from './Utils/Random';
import Location from './component/Location';
import ResidentsList from './component/ResidentsList';
import img1 from './assets/img/img_1.png';
import Loader from './component/Loader';

function App() {
  const [LocationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState("");

  const getIdRandom = () => Random(1, 126);
  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
    if (newValue > 126) alert('Solo puede ingresar Numeros del 1 al 126');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdRandom());
    setIdLocationValue('');
  };

  useEffect(() => {
    loadLocationInfo(getIdRandom());
  }, []);

  return (
    <>
      {LocationInfo ? (
        <div className="App">
          <div className="img">
            <img src={img1} alt="ImagendePortada" />
          </div>
          <form onSubmit={handleSubmit} className="Form flex justify-center">
            <input
              className="inputForm text-black"
              type="search"
              name="id-location"
              value={idLocationValue}
              onChange={idLocationHandleChange}
              placeholder="enter a number from 1 - 126"
            />
            <input className="search" type="submit" value="search" />
          </form>
          <div>{<Location {...LocationInfo} />}</div>
          <div>{<ResidentsList residents={LocationInfo.residents} />}</div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
