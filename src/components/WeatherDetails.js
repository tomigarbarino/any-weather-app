const WeatherDetails = ({ weatherData, difKelvin }) => (
    <div>
        <h2>{weatherData.name}</h2>
        <p>Temperatura: {parseInt(weatherData?.main?.temp - difKelvin)}ºC</p>
        <p>Condición meteorológica: {weatherData.weather[0].description}</p>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
    </div>
);

export default WeatherDetails;
