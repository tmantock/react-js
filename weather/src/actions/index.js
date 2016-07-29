import axios from 'axios';
const WEATHER_API = '3ada3a03e32b69ed8439a913afab37e2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${WEATHER_API}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
