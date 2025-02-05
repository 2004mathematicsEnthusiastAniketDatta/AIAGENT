// src/utils/helpers.ts

export function formatWeatherResponse(data) {
    return `The weather in ${data.location} is currently ${data.temperature}°C with ${data.condition}.`;
}

export function parseUserRequest(request) {
    const locationMatch = request.match(/weather in (\w+)/i);
    return locationMatch ? locationMatch[1] : null;
}