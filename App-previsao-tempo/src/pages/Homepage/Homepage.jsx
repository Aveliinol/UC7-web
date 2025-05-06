import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "../../components/weatherInformations/wheatherInoformations";
import WeatherInformations5Days from "../../components/weatherInformations5Days/WheatherInoformations5Days";
import "./Homepage.css";


function Homepage(){
    
    const inputRef = useRef();
    const [weather, setWeather] = useState();
    const [weather5Days, setWeather5Days] = useState();

   async function searchCity(){
       const city = inputRef.current.value;
       const key = `fa007e7f235e7f3d356e57eaaeb00c1b`
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
       const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`
       const apiInfo =  await axios.get(url);
       const apiInfo5Days = await axios.get(url5days)
       setWeather(apiInfo.data)
       console.log(apiInfo.data)
       setWeather5Days(apiInfo5Days.data);
       console.log(apiInfo5Days.data)
    }

    return(
        <div className="container">
        <h1> Componente Homepage </h1>
        <input ref={inputRef} type="text"  placeholder="Digite a cidade"/>
        <button onClick={searchCity}>Buscar</button>

       {weather && <WeatherInformations weather={weather} /> }
       {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} /> }
    </div>
    )

}

export default Homepage