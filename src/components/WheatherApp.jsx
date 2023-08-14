import React, { useState } from 'react';
import { fetchWeather } from '../helpers/weatherAPI'; // Importa la función fetchWeather desde el archivo de ayuda
import WeatherDetails from './WeatherDetails'; // Importa el componente WeatherDetails

export const WheatherApp = () => {
    const difKelvin = 273.15;
    const [city, setCity] = useState('');
    const [dateWheather, setDateWheather] = useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (city.trim().length > 0) {
            try {
                const data = await fetchWeather(city); // Llama a la función fetchWeather con la ciudad
                setDateWheather(data);
            } catch (error) {
                console.error('The following problem occurred: ', error);
            }
        }
    };

    return (
        <div className="container">
            <h1>Aplicación del Clima</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                />
                <button type="submit">Buscar</button>
            </form>  
            {dateWheather && <WeatherDetails weatherData={dateWheather} difKelvin={difKelvin} />} {/* Renderiza el componente WeatherDetails si hay datos */}
        </div>
    );
};
