import axios from "axios";

const API_KEY = "YnC1xVug0kvxp9isY5lRGOEV7coiIcCLfRJHa8EJ";
const BASE_URL = "https://api.nasa.gov/insight_weather/";

export const getWeather = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}?api_key=${API_KEY}&feedtype=json&ver=1.0`,
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed fetch data");
  }
};
