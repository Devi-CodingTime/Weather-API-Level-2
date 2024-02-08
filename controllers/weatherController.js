const WeatherData = require('../models/weatherDataModel');

const getWeatherByCityName = async (req, res) => {
  const cityName = req.params.cityName;

  try {
    const weatherData = await findOne({cityName});
    if(!weatherData)
    return res.status(404).json({ message: 'Weather data not found for the given city' });

    // TODO: Implement logic to retrieve weather data by city name
    // Example response when data is found:
    return res.status(200).json({ weatherData });
    // Example response when data is not found:
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getWeatherByZipCode = async (req, res) => {
  const zipCode = req.params.zipCode;

  try {
    const weatherData = await findOne({zipCode});
    if(!weatherData)
    return res.status(404).json({ message: 'Weather data not found for the given zip code' });

    // TODO: Implement logic to retrieve weather data by zip code
    // Example response when data is found:
   return res.status(200).json({ weatherData });
    // Example response when data is not found:
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const postWeatherAlert = async (req, res) => {
  const { cityName, humidity, weatherDescription, temperature, zipCode } =
    req.body;

  try {
    const newAlert = await WeatherData.create({ cityName, humidity, weatherDescription, temperature, zipCode });
    // TODO: Implement logic to post weather alert
    // Example response when alert is posted successfully:
    res.status(201).json({ message: 'Weather alert posted successfully', alert: newAlert });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getWeatherByCityName,
  getWeatherByZipCode,
  postWeatherAlert,
};
