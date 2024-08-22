import { useWeather } from "../../contextAPI/mainWeather"

export const ToggleUnit = ()=>{
    const {toggleUnit, unit} = useWeather();
    return(
        <button className="five-days-forcast" onClick={toggleUnit}>
            {unit==='C'?'Switch to Fahrenheit': 'Switch to Celsius'}
        </button>
    )
}