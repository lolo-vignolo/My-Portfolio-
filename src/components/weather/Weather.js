import React, {useEffect, useState} from 'react';
import "../weather/weather.css"


 //ApiKey = "7a42a81b008f43bba2fb19882be6f37e";

 const api = {
    key: "7a42a81b008f43bba2fb19882be6f37e",
    base:"https://api.openweathermap.org/data/2.5/"
}


export const Weather = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
  

    const search = evt => {
        
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }


    const click = () => {
      {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }

    
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
    return `${day} ${date} ${month} ${year}`
    }

   

    return (
        <div>
                <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'warm' : 'app') : 'app'}> 
                
                <main>
                    <div className="search-box">
                    <input 
                        type="text"
                        className="search-bar"
                        placeholder="Search weather..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                    </div>
                    {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                            {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                        </div>
                        ) : ('')}  

                        <button
                        className='hand-weather animate__pulse'
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onClick={click}
                                > <i className="far fa-hand-pointer"></i>
                        </button>
          
                </main>
                        
                </div>
                
            </div>
    )
}
