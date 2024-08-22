import { useState } from "react";
import { useWeather } from "../../contextAPI/mainWeather";
import "./searchbar.css";

export const SearchBar = ()=>{
    const {handleSearch} = useWeather();
    const [input, setInput] = useState('');
    const handleSearchCity = async (e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            if(input.trim()){
                const cityFound = await handleSearch(input);
                if(!cityFound){
                    alert("City not found. Please try another city.")
                }
                setInput('')
            }
        }
    }
    return(
        <div className="search-container">
            <input type="text" 
            placeholder="search city"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={handleSearchCity}
            />
        </div>
    )
}