import axios from "axios";
import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const useWeather = ()=>{
    const value = useContext(WeatherContext);
    return value;
}

export const WeatherProvider = ({children})=>{
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState("C");
    const [windDirection, setWindDirection] = useState(0);
    const [forcastDayData, setForCastDayData] = useState([])

    const compassDegree = (direction)=>{
        const directions = {
            N: 0,
            NNE: 22.5,
            NE: 45,
            ENE: 67.5,
            E: 90,
            ESE: 112.5,
            SE: 135,
            SSE: 157.5,
            S: 180,
            SSW: 202.5,
            SW: 225,
            WSW: 247.5,
            W: 270,
            WNW: 292.5,
            NW: 315,
            NNW: 337.5,
        };
        return directions[direction] || 0;
    }

    const toggleUnit = ()=>{
        setUnit(prevUnit=> prevUnit === 'C'?'F':'C')
    }

    const handleSearch = async (cityName)=>{
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&aqi=no`);
            const forCastResponse = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}&days=5`);
            if(response.status===200 && forCastResponse.status === 200){
                setCity(cityName);
                setWeatherData(response.data.current);
                const degrees = compassDegree(response.data.current.wind_dir);
                setWindDirection(degrees);
                setForCastDayData(forCastResponse.data.forecast.forecastday);
                return true
            }
        } catch (error) {
            console.log("error in fetching the data", error.message);
            return false
        }
    }

    return(
        <WeatherContext.Provider value={{city, handleSearch,weatherData, toggleUnit, unit, windDirection, forcastDayData}}>
            {children}
        </WeatherContext.Provider>
    )
}