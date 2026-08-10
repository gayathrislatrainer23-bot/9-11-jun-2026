import WeatherDisplay from "./WeatherDisplay"


function WeatherInfo() {
    let info =  { city: "Chennai", temp: 30 }
  return (
    <div>
        <WeatherDisplay info = {info}/>
    </div>
  )
}

export default WeatherInfo