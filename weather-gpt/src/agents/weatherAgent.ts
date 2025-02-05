class WeatherAgent {
    constructor(private weatherService: WeatherService) {}

    async getWeather(location: string): Promise<WeatherResponse> {
        try {
            const weatherData = await this.weatherService.fetchWeatherData(location);
            return this.formatWeatherResponse(weatherData);
        } catch (error) {
            throw new Error(`Failed to get weather details: ${error.message}`);
        }
    }

    private formatWeatherResponse(data: any): WeatherResponse {
        // Format the response as needed
        return {
            location: data.location,
            temperature: data.temperature,
            description: data.description,
        };
    }
}

export default WeatherAgent;