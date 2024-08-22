import { useWeather } from "../contextAPI/mainWeather";
import { Direction } from "./direction-meter/directionMeter";
import { Humadity } from "./humidity/Humadity";
import { MainContainer } from "./maincontainer/maincontainer";
import { SearchBar } from "./searchbar/searchbar";
import "./weatherdetails.css";

export const WeatherDetails = ({handleVisible})=>{
    const {city, weatherData} = useWeather();
    return(
        <>
            <section className="weather-detailssection">
                <div className="weather-details-container">
                    <SearchBar/>
                <h1>{city? city: "city Name"}</h1>
                <div className="wheather-sub-container">
                    <MainContainer handleVisible={handleVisible}/>
                    <div>
                        <Humadity/>
                        <Direction/>
                    </div>
                </div>
                </div>

            </section>
        </>
    )
}