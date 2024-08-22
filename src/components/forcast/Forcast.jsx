import { useWeather } from "../../contextAPI/mainWeather";
import "./Forcast.css";

export const Forcast = () => {
    const { forcastDayData, unit } = useWeather();
    return (
        <>
            <section className="forcast-section">
                <h1 style={{ color: "black" }}>Five Day Forcast</h1>
                <div className="forcast-container">
                    {forcastDayData?.map((data) => (
                        <div className="show-forcastdetails">
                            <div className="temp-container">
                                <span>{unit === 'C' ? data.day.avgtemp_c : data.day.avgtemp_f}<small className="degree-sign">o</small>
                                    <span style={{ left: "15%" }}>{unit}</span></span>
                                <img src={data.day.condition.icon} alt="icon" />
                            </div>
                            <div className="temp-container2">
                                <span>{data.date}</span>
                                <br />
                                <span>{data.day.condition.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}