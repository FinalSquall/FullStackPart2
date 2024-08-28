import { useState,useEffect } from 'react'
import axios from 'axios'

const WeatherInfo = ({country}) => {
    const api_key = import.meta.env.VITE_WEATHER_KEY
    /* Supposed to keep state in App, but seemed appropriate to have it here on this occasion? Would be interested to know if I should still lift this state up */
    const [weatherData,setWeatherData] = useState(null)

    useEffect(() => {
       axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${country.capital}&apikey=${api_key}`)
       .then(res => {
        console.log('weather_response',res)
        console.log('weather_response_data_test',res.data.data.values)
        setWeatherData(res)
       })
    },[])

    if (weatherData) {
        return (
            <div>
                <h2>Weather in {country.capital}</h2>
                <p>temperature: {weatherData.data.data.values.temperature} celsius</p>
                <p>wind {weatherData.data.data.values.windSpeed} m/s</p>
            </div>

        )
    }
}

export default WeatherInfo