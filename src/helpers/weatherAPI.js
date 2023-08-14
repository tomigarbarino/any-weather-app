const API_KEY = 'YOUR_API_KEY';
const urlMain = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${urlMain}?q=${city}&appid=${API_KEY}`);
        return await response.json();
    } catch (error) {
        console.error('The following problem occurred: ', error);
        throw error;
    }
};
