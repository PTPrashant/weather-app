import React, { useEffect, useState } from 'react'
import './MyStyle.css'


export default function HeadBody() {
    const [cityName, setCityName] = useState("delhi")
    const [cityDetails, setCityDetails] = useState()


    async function updateWeather ( cityName ) {
     let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=c6281e1d6a47693daf6030814ed81c86"
     let data = await fetch(url);
     let mydata = await data.json();
     setCityDetails(mydata);
     console.log(cityDetails)
     console.log(cityName)



    }

    useEffect(() => {
        updateWeather("Delhi")
       

    }, [])

    const inputChange = (event) =>{
        setCityName(event.target.value)
      
    }
    
    const getWeatherUpdates = ( ) => {
        console.log(cityName)
        updateWeather(cityName)
        // console.log(cityDetails)
        console.log(cityDetails.main.temp)
        
    }

  return (
    <>
    <div className='conainer  weather text-center' >
        <h2 >Enter City's Name</h2>
        <input className='my-2' style={{width: "16%"}}  type="text" onChange={inputChange} />
        < button className='btn btn-primary' value={cityName} onClick={getWeatherUpdates}  >Submit</button>
      
    </div>
    <div   >
        <div className='container bgColorWhite text-center  shadow  myCard'>
            <h3>{cityName}</h3>
            <p>Current Temp: <span>{ (cityDetails.main.temp - 273).toFixed(2) } 'C</span></p>
            <p style={{color:"blue"}} >Min. Temp: <span>{ (cityDetails.main.temp_min - 273).toFixed(2) } 'C</span></p>
            <p style={{color:"red"}} >Max. Temp: <span>{ (cityDetails.main.temp_max - 273).toFixed(2) } 'C</span></p>
            <p>Humidity: <span>{ (cityDetails.main.humidity).toFixed(2) } </span></p>
            
        </div>
       
      
    </div>
      
    </>
  )
}
