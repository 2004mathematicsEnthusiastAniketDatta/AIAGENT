require('dotenv').config();
const client = require('./client'); // Ensure your client module uses process.env.OPENAI_API_KEY

function getWeatherDetails(location) {
    return client.search({
        model: 'davinci',
        engine: "davinci",
        documents: ["Weather in London", "Weather in Berlin", "Weather in Paris"],
        query: `What is the weather in ${location} today?`,
    }).then(response => response.data)
      .catch(error => { throw error; });
}

const user = 'Hey, what is the weather in London today?';

getWeatherDetails('London')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
