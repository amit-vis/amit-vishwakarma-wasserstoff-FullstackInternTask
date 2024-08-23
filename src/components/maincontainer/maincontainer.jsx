import { useWeather } from "../../contextAPI/mainWeather";
import { ToggleUnit } from "../toggleunit/toggleunit";
import "./maincontainer.css";

export const MainContainer = ({handleVisible}) => {
    const {weatherData,unit, forcastDayData} = useWeather();
    return (
        <>
            <div className="main-details-container">
                <ToggleUnit/>
                <div className="temp-container">
                    <span>{unit==='C'?weatherData?.temp_c:weatherData?.temp_f}<small className="degree-sign">o</small>
                        <span style={{ left: "15%" }}>{unit}</span></span>
                    <img src={weatherData?.condition.icon} alt="icon" />
                </div>
                <h3>{weatherData?.condition.text}</h3>
                <div className="about-temp">
                    <h3>Min temp:-{unit==='C'?forcastDayData[0]?.day.mintemp_c:forcastDayData[0]?.day.mintemp_f}
                         {unit}</h3>
                    <h3>Max temp:-{unit==='C'?forcastDayData[0]?.day.maxtemp_c:forcastDayData[0]?.day.maxtemp_f}
                    {unit}</h3>
                    <h3>wind direction:- {weatherData?.wind_dir}</h3>
                    <h3>wind speed:- {weatherData?.wind_kph}</h3>
                </div>
                <button className="five-days-forcast" onClick={handleVisible}>check 5 days forecast</button>
            </div>
        </>
    )
}