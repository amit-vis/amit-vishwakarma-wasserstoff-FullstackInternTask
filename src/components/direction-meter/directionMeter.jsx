import { useWeather } from "../../contextAPI/mainWeather"
import "./directionMeter.css"
export const Direction = () => {
    const {windDirection} = useWeather();

    return (
        <>
            <h3>Wind Direction</h3>
            <div className="direction-container" 
            >

                <div className="direction-meter">
                    <div class="direction-labels">
                        <span class="north">N</span>
                        <span class="east">E</span>
                        <span class="south">S</span>
                        <span class="west">W</span>
                    </div>
                    <div className="needle"
                    style={{transform: `rotate(${windDirection}deg)`}}
                    ></div>
                </div>
            </div>
        </>
    )
}