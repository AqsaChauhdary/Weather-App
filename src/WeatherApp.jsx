import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import WeatherInfo from './WeatherInfo';

export default function SearchBox() {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    let API_URL1 = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "017ae3f723af13fcb855c520d2b4629e";
    let [data, setData] = useState({});

    function handleInput(event) {
        setCity(event.target.value);
    }
    async function getWeatherInfo(city) {
        try {
        setError(false);
        let response = await fetch(`${API_URL}?q=${city}&limit=${1}&appid=${API_KEY}`);
        let result = await response.json();
        let response1 = await fetch(`${API_URL1}?lat=${result[0].lat}&lon=${result[0].lon}&appid=${API_KEY}&units=metric`);
        let result1 = await response1.json();
        let Info = {
            city: city,
            temp: result1.main.temp,
            temp_max: result1.main.temp_max,
            temp_min: result1.main.temp_min,
            humidity: result1.main.humidity,
            feels_like: result1.main.feels_like,
            description: result1.weather[0].description
        }
        setData(Info);
        } catch(err) {
            setError(true);
        }
        }
        useEffect(() => {
            getWeatherInfo("Lahore");
        }, [])
    function handleSubmit(event) {
        event.preventDefault();
        getWeatherInfo(city);
        setCity("");
    }
    return(
    <div className='SearchBox' style={{textAlign: "center"}}>
        <h2>Weather App by Aqsa</h2>
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Search for place weather" variant="outlined" required value={city} onChange={handleInput}/>
            &nbsp; &nbsp; 
            <Button variant="contained" endIcon={<SearchIcon />} size="large" type="submit"> Search </Button>
            {error && <p style={{color: "red"}}>Such place not exists!</p>}
        </form>
        <WeatherInfo info={data}/>
    </div>
    );
}