import axios from 'axios';
import { API_URL } from '../Config';

export const getWeatherData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return [];
  }
};
