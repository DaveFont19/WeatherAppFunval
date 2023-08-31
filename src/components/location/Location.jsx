import { useState, useEffect } from "react";
import axios from "axios";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";

function Location({ setLat, setLon }) {
  const [location, setLocation] = useState("Guadalajara");
  const [newCity, setNewCity] = useState("");
  const [state, setState] = React.useState({
    left: false,
  });
  const [recordCities, setRecordCities] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b45208ded9c8ad5a69bce004a6e965da`
      )
      .then(function (response) {
        // manejar respuesta exitosa
        setLat(response.data[0].lat);
        setLon(response.data[0].lon);
      })
      .catch(function (error) {
        throw error;
      });
  }, [location]);

  const changeCity = () => {
    setLocation(newCity);
    setRecordCities([...recordCities, [newCity]]);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      id="drawer"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <span
        id="close"
        class="material-symbols-outlined"
        onMouseUp={toggleDrawer(anchor, false)}
      >
        close
      </span>
      <div>
        <input
          type="text"
          placeholder="Search for a Place"
          onBlur={(e) => setNewCity(e.target.value)}
          className=" ml-12 mb-6 h-10 text-slate-600 search-input"
        ></input>
        <button
          id="buttonSearch"
          type="submit"
          onMouseUp={toggleDrawer(anchor, false)}
          onClick={changeCity}
          className="text-white w-20 h-10 ml-6"
        >
          Search
        </button>
      </div>
      {/*esto aparece cuando es despleado el Drawer*/}
      <ul className=" flex flex-col gap-2">
        {recordCities
          ? recordCities.map((city, index) => (
              <div
                id="listRecord"
                onClick={() => setLocation(city)}
                onMouseUp={toggleDrawer(anchor, false)}
                className="flex w-72 cursor-pointer mx-12"
              >
                <li className="text-white grow ml-4" key={index}>
                  {city}
                </li>
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
            ))
          : ""}
      </ul>
    </Box>
  );

  return (
    <>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
            <Stack
              component="form"
              sx={{ width: "25ch" }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <button
                type="button"
                id="inputSearch"
                onClick={toggleDrawer(anchor, true)}
                className="w-40"
              >
                Search for a Place
              </button>
              {/*Tiene que ponerse en el button type"button" porque si no, vuelve actualizar la página */}
            </Stack>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Location;
