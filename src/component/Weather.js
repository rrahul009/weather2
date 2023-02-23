import React from 'react'

const Weather = (props) => {
  return (
    <div>
     <h1>  {props.data.name} </h1>
     <h2>Temprature is {props.data.main.temp} deg C</h2>
 {/* <h3>{props.data.weather[0].description}</h3> */}
    </div>
  )
}

export default Weather
