import { useWeather } from "../../contextAPI/mainWeather";
import "./Humadity.css";
export const Humadity = ()=>{
    const {weatherData} = useWeather();
    
    return(
        <>
        <div>
        <h1 style={{margin:"auto"}}>Humidity</h1>
        <div className="humadity-container">

            <div className="progress-meter"
            style={{background: `conic-gradient(rgb(54, 54, 229) ${3.6*weatherData?.humidity}deg, rgb(172, 172, 196) 0deg)`}}
            >
            <span className="progress-value">{weatherData?.humidity}%</span>
            </div>
        </div>
        </div>
        </>
    )
}