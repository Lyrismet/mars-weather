import axios from "axios";

const API_KEY = "J0wPqUjoaVn7MXB0KpfZYw==xAeVeR9y7RIpY3Uc";
const BASE_URL = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

export const GetQuote = async () => {
  try {
    const response = await axios.get(
      BASE_URL, {
        method: "GET",
        headers: {
            'X-Api-Key': API_KEY
        },
          contentType: "application/json",
        }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed fetch data");
  }
};
