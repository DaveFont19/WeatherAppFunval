import axios from 'axios'
import React from 'react'
import { useState } from 'react';


function GeoLocation({setLat, setLon}) {

    const [status, setStatus] = useState('');
    const [mapLink, setMapLink] = useState({ href: '', textContent: '' });
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      setStatus('');
      setMapLink({
        href: `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`,
        textContent: `${latitude} °, Longitude: ${longitude} °`,
      });
      setLat(latitude);
      setLon(longitude);
    }
  
    function error() {
      setStatus('Unable to retrieve your location');
    }
  
    function geoFindMe() {
      setStatus('Locating…');
      setMapLink({ href: '', textContent: '' });
  
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
  
    return (
      <div>
        <span id='target' className ="material-symbols-outlined" onClick={geoFindMe}>
        my_location
        </span>
      </div>
    );
  }
  

export default GeoLocation