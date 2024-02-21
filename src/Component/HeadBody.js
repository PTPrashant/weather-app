import React, { useEffect, useState } from "react";
import "./MyStyle.css";
import axios from "axios";


export default function HeadBody() {
  const [cityName, setCityName] = useState('');
  const [cityDetails, setCityDetails] = useState();
  const [displayCity, setDisplayCity] = useState();

  async function updateWeather(myCityName) {

    let url =`https://api.openweathermap.org/data/2.5/weather?q=${myCityName}&APPID=c6281e1d6a47693daf6030814ed81c86`;

    try{

      
      axios.get(url)
      .then((response) => {
        setCityDetails(response.data);
        setDisplayCity(response.data.name);
      })
      .catch((errorResponse) => {
        console.log(errorResponse);
      });
    }
    catch( error){console.log(error)};
   
  }



  const getWeatherUpdates = () => {
    updateWeather(cityName);
setCityName('');
};
  
useEffect(function(){
  updateWeather('delhi');
  }, []);

  
  
  return (
    <div  id="weather" style={{paddingTop: '20px'}} >
    <div className="container  weather text-center">
    <h2>Enter City's Name</h2>
    <input
    placeholder="Enter city name"
    className="my-2"
    style={{ width: "16%" }}
    type="text"
    value={cityName}
    onChange={event=> setCityName(event.target.value)}
    />
    
        <button
          className="btn btn-primary"
          value={cityName}
          onClick={getWeatherUpdates}
        >
        Submit
        </button>
        
        </div>
        <div>
        <div className="container bgColorWhite text-center  shadow  myCard">
        <h3>{displayCity}</h3>
        <p>
          Current Temp:
         { displayCity && <span>{(cityDetails.main.temp - 273).toFixed(2)} 'C</span>}
        </p>
        
        
        <p style={{ color: "blue" }}>
          Min. Temp:
         { displayCity && <span>{(cityDetails.main.temp_min - 273).toFixed(2)} 'C</span>}
        </p>
        
        <p style={{ color: "red" }}>
          Max. Temp:
          { displayCity && <span>{(cityDetails.main.temp_max - 273).toFixed(2)} 'C</span>}
        </p>
        
        <p>
          Humidity: { displayCity && <span>{cityDetails.main.humidity.toFixed(2)} </span>}
        </p>
          
          

          </div>
      </div>
    </div>
  );
}
