import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Random } from './Utils/Random';

function App() {
  const [LocationInfo, setLocationInfo] = useState(null);
  const getIdRandom = () => Random(1,126);
  const loadLocationInfo = async () => {
    const url= `https://rickandmortyapi.com/api/location/${getIdRandom}`
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{

    loadLocationInfo();
  },[]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
