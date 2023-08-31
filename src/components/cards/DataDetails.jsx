import * as React from "react";
import Box from "@mui/material/Box/Box";
import Slider from "@mui/material/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import Arrow from "./Arrow";

function DataDetails({ globalData }) {
  if (!globalData) {
    return (
      <section className="grid grid-cols-1  gap-8 mx-8 sm:grid-cols-2">
        <div>
          {" "}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
        <div>
          {" "}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
        <div>
          {" "}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
        <div>
          {" "}
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      </section>
    );
  } else {
    const marks = [
      {
        value: 0,
        label: "0",
      },
      {
        value: 50,
        label: "50",
      },
      {
        value: 100,
        label: "100",
      },
    ];

    function valuetext(value) {
      return `${value}°C`;
    }

    const division = globalData.visibility;
    let visibility = division / 1000;
    let humidity = globalData.main.humidity;

    return (
      <>
        <h1 className="text-4xl text-white py-5 mt-8 mx-8 lg:mx-28">
          Today's Highlight
        </h1>
        <section className=" w-4/5 grid grid-cols-1  gap-8 mx-8 sm:grid-cols-2 lg:mx-28">
          <div id="card" className="flex flex-col items-center">
            <h3 className="text-2xl">Wind Status</h3>
            <p className="text-5xl lg:text-7xl">
              {globalData.wind.speed} <span className="text-5xl">mph</span>
            </p>
            <Arrow id="arrow" globalData={globalData} />
          </div>

          <div id="card" className=" flex flex-col items-center">
            <h3 className="text-2xl">Humidity</h3>
            <p className="text-5xl lg:text-7xl">
              {globalData.main.humidity}
              <span className="text-5xl">%</span>
            </p>
            <div className="container">
              <p id="numbersHumidity" className="flex mx-12">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </p>
              <Box className="mx-12">
                <Slider
                  value={humidity}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  id="slider"
                  className="h-4"
                />
              </Box>
            </div>
            <label className="mb-4 self-end mx-12">%</label>
          </div>

          <div id="card" className="flex flex-col items-center py-8">
            <h3 className="text-2xl">Visibility</h3>
            <p className="text-5xl lg:text-7xl">
              {visibility}
              <span className="text-5xl">miles</span>
            </p>
          </div>

          <div id="card" className=" flex flex-col items-center py-8">
            <h3 className="text-2xl">Air Pressure</h3>
            <p className="text-5xl lg:text-7xl">
              {globalData.main.pressure}
              <span className="text-5xl">mb</span>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default DataDetails;
