import React from 'react'

function WeatherDisplay({info}) {
    console.log('weatherdisplay' ,info)
  return (
    <div>{`Current temperature in ${info.city} is ${info.temp}°C`}</div>
  )
}

export default WeatherDisplay