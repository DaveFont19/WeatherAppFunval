import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const WEATHER_API = "/weather";
const ONECALL_API = "/onecall";
const API_KEY = "b45208ded9c8ad5a69bce004a6e965da";
const API_KEY2 = "b1021dcf6ee71eed87479bd158a87d77";
const IMPERIAL_API = "/weather";

export const weatherApi = {
  getWeather: (lat, lon, unitDefault) => {
    return axiosInstance.get(WEATHER_API, {
      params: {
        lat: lat,
        lon: lon,
        units: unitDefault,
        appid: API_KEY,
      },
    });
  },
  getOneCall: (lat, lon, unitDefault) => {
    return axiosInstance.get(ONECALL_API, {
      params: {
        lat,
        lon,
        units: unitDefault,
        appid: API_KEY2,
      },
    });
  },
  getImperial: (lat, lon) => {
    return axiosInstance.get(IMPERIAL_API, {
      params: {
        lat,
        lon,
        units: "imperial",
        appid: API_KEY,
      },
    });
  },
};
