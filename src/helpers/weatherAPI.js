const API_KEY = '155d96ccc80742a1348c95bd7bc509f8';
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
