import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from './component/Weather'
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=32d053a1213fe2df6391ad90f5a306cc`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
        
      });
    }
    fetchData();
  }, [lat,long])

  
  return(
    <div className="App">
 <Weather data={data}/>    
  </div>
  );
  

 
}

export default App;
