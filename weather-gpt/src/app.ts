import WeatherAgent from './agents/weatherAgent';
import { createWeatherChain } from './chains/weatherChain';
import WeatherService from './services/weatherService';
import { config } from './config/environment';

const weatherService = new WeatherService(config.apiKey);
const weatherAgent = new WeatherAgent(weatherService);
const weatherChain = createWeatherChain(weatherAgent);

const userRequest = 'What is the weather like today?';

// Example of handling a user request
weatherChain.handleRequest(userRequest)
    .then(response => {
        console.log('Weather Response:', response);
    })
    .catch(error => {
        console.error('Error fetching weather details:', error);
    });