import { useState } from 'react';
import './App.css';
import { WeatherDetails } from './components/weatherdetails';
import { Forcast } from './components/forcast/Forcast';
import { WeatherProvider } from './contextAPI/mainWeather';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisible = ()=>{
    setIsVisible(!isVisible)
  }
  return (
    <div className="App">
      <WeatherProvider>
      <WeatherDetails handleVisible={handleVisible}/>
      {isVisible && <Forcast/>}
      </WeatherProvider>
    </div>
  );
}

export default App;
