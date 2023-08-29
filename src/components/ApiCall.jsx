import { useState, useEffect } from 'react'
import axios from 'axios';
import Location from './location/Location';
import GeoLocation from './location/GeoLocation';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getImages } from './helper';




function ApiCall({setGlobalData, setOneCall}) {

  const [temperature, setTemperature] = useState (false)
  const [city, setCity] = useState ("")
  const [images, setImages] = useState ("01n")
  const [lat, setLat] = useState ("")
  const [lon, setLon] = useState ("")
  const [data, setData] = useState ("")
  const unitDefault = "metric"
  const temperatureFloor = Math.floor(temperature);
  const image = getImages (images);





  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unitDefault}&appid=b45208ded9c8ad5a69bce004a6e965da`)
      .then(function (response) {
        // manejar respuesta exitosa
        setTemperature(response.data.main.temp);
        setCity(response.data.name);
        setData(response.data)
        setImages(response. data.weather[0].icon);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [lat, unitDefault]);


  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=b45208ded9c8ad5a69bce004a6e965da`)
      .then(function (response) {
        // manejar respuesta exitosa
        setGlobalData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [lat, unitDefault]);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unitDefault}&appid=b1021dcf6ee71eed87479bd158a87d77`)
      .then(function (response) {
        // manejar respuesta exitosa
        setOneCall(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [lat]);


  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const date = new Date(data.dt * 1000); // Convertir la fecha UNIX a objeto Date
  const dayOfWeek = daysOfWeek[date.getDay()]; // Obtener el día de la semana
  const dayOfMonth = date.getDate(); // Obtener el número del día
  const month = months[date.getMonth()]; // Obtener el mes


 return (
  <div className='sideBar md:w-full container lg:w-full'>
    <nav id='clouds' className='md:py8 lg:w-full h-screen container'>
      
      <div id='location' className='flex pt-8 ml-4 pb-4'>
        <Location
        setLat={setLat}
        setLon={setLon}></Location>
        <GeoLocation
        setLat={setLat}
        setLon={setLon}></GeoLocation>
      </div>

      {data ? 
      <footer className='footer'>
        <img src={image} className='mx-28 mt-4'/>
        <div id="footer" className='lg: pt-16 mx-32'>
          <div className='flex items-baseline'>
            <h1 className=' text-white mb-16 mt-8 md:text-7xl lg:text-8xl'>{temperatureFloor }</h1><span id='min' className='text-5xl'>°C</span>
          </div>
          <h2 id="datas" className="text-center mb-16 text-3xl">{data.weather[0].main}</h2>
          <h2 id="datas" className="text-center mb-2 text-1xl">{`${dayOfWeek}, ${dayOfMonth} ${month}`}</h2>
          <h3 id='datas' className="text-center mb-2" ><i class="fa-solid fa-location-dot"></i> {city}</h3> 
        </div>
      </footer> : 
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>}
      </nav>
  </div>
 )
}

export default ApiCall