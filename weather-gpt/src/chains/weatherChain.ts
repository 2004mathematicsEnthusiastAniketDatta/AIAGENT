function createWeatherChain(weatherAgent, weatherService) {
    return async function handleWeatherRequest(userRequest) {
        try {
            const weatherData = await weatherAgent.getWeather(userRequest.location);
            const formattedResponse = weatherService.formatWeatherData(weatherData);
            return formattedResponse;
        } catch (error) {
            throw new Error(`Error fetching weather data: ${error.message}`);
        }
    };
}

export { createWeatherChain };