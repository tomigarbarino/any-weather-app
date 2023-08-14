import { useState } from 'react'; // Importa la función useState de React

export const WheatherApp = () => {

    const API_KEY = '155d96ccc80742a1348c95bd7bc509f8'; // Clave de la API
    const urlMain = 'https://api.openweathermap.org/data/2.5/weather'; // URL de la API
    const difKelvin = 273.15; // Diferencia en grados Kelvin para convertir a Celsius

    const [city, setCity] = useState(''); // Estado para almacenar la ciudad ingresada por el usuario
    const [dateWheather, setDateWheather] = useState(null); // Estado para almacenar los datos del clima

    const handleCityChange = (e) => {
        setCity(e.target.value); // Actualiza el estado de la ciudad con el valor ingresado por el usuario
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario
        if(city.trim().length > 0) fetchWheather(); // Si la ciudad no está vacía, llama a fetchWheather
    }

    const fetchWheather = async () => {
        try {
            const response = await fetch(`${urlMain}?q=${city}&appid=${API_KEY}`); // Realiza una solicitud a la API con la ciudad y la clave
            const data = await response.json(); // Convierte la respuesta en un objeto JSON
            setDateWheather(data); // Actualiza el estado con los datos del clima
        } catch(error) {
            console.error('Ocurrió el siguiente problema: ', error); // Registra el error en la consola si algo sale mal
        }
    }

    return (
        <div className="container">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}> {/* Llama a handleSubmit cuando se envía el formulario */}
                <input 
                    type="text"
                    value={city}
                    onChange={handleCityChange} // Llama a handleCityChange cuando el valor del input cambia
                />
                <button type="submit">Search</button>
            </form>  
            {
                dateWheather && ( // Si hay datos del clima, muestra la información
                    <div>
                        <h2>{dateWheather.name}</h2>
                        <p>temperature: {parseInt(dateWheather?.main?.temp - difKelvin)}ºC</p>
                        <p>Condition meteorological: {dateWheather.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${dateWheather.weather[0].icon}@2x.png`}/>
                    </div>
                )
            }
        </div>
    )
}
