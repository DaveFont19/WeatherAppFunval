import { useState, useEffect } from "react";
import axios from "axios";
import Location from "./location/Location";
import GeoLocation from "./location/GeoLocation";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getImages } from "./helper";
import { weatherApi } from "../api/weatherapi";

function ApiCall({ setGlobalData, setOneCall }) {
  const [temperature, setTemperature] = useState(false);
  const [city, setCity] = useState("");
  const [images, setImages] = useState("09d");
  const [lat, setLat] = useState("20.66682");
  const [lon, setLon] = useState("-103.39182");
  const [data, setData] = useState("");
  const unitDefault = "metric";
  const temperatureFloor = Math.floor(temperature);
  const image = getImages(images);

  useEffect(() => {
    fetchData(lat, lon, unitDefault);

    async function fetchData(lat, lon, unitDefault) {
      try {
        const getWeatherResponse = await weatherApi.getWeather(
          lat,
          lon,
          unitDefault
        );
        const getImperialResponse = await weatherApi.getImperial(lat, lon);
        const getOnecallResponse = await weatherApi.getOneCall(
          lat,
          lon,
          unitDefault
        );
        setTemperature(getWeatherResponse.data.main.temp);
        setCity(getWeatherResponse.data.name);
        setData(getWeatherResponse.data);
        setImages(getWeatherResponse.data.weather[0].icon);
        setGlobalData(getImperialResponse.data);
        setOneCall(getOnecallResponse.data);
      } catch (error) {}
    }
  }, [lat, lon, unitDefault]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(data.dt * 1000); // Convertir la fecha UNIX a objeto Date
  const dayOfWeek = daysOfWeek[date.getDay()]; // Obtener el día de la semana
  const dayOfMonth = date.getDate(); // Obtener el número del día
  const month = months[date.getMonth()]; // Obtener el mes

  return (
    <div className="w-full h-full">
      <nav
        id="clouds"
        className="flex justify-between flex-col items-center h-full py-8"
      >
        <div id="location" className="w-full px-8">
          <Location setLat={setLat} setLon={setLon}></Location>
          <GeoLocation setLat={setLat} setLon={setLon}></GeoLocation>
        </div>

        {data ? (
          <>
            <img src={image} />

            <div className="flex items-center">
              <h1 className=" text-white text-8xl ">{temperatureFloor}</h1>
              <span id="min" className="text-5xl">
                °C
              </span>
            </div>
            <h2 id="datas" className="text-center mb-12 text-3xl">
              {data.weather[0].main}
            </h2>
            <h2
              id="datas"
              className="text-center mb-2 text-1xl"
            >{`${dayOfWeek}, ${dayOfMonth} ${month}`}</h2>
            <h3 id="datas" className="text-center mb-8">
              <i className="fa-solid fa-location-dot"></i> {city}
            </h3>
          </>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </nav>
    </div>
  );
}

export default ApiCall;
