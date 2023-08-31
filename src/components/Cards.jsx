import React, { useState } from "react";
import DataDetails from "./cards/DataDetails";
import ForeCast from "./cards/ForeCast";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Cards({ globalData, oneCall }) {
  const [data, setData] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);

  useEffect(() => {
    setData(oneCall.daily);
  }, [oneCall]);

  function handleClick() {
    setButtonActive(true);
  }
  function handleChange() {
    setButtonActive(false);
  }

  return (
    <section className="flex flex-col">
      <div id="containerButtons" className="flex mx-20 pt-4 lg:mr-32">
        <button
          onClick={handleClick}
          className={`${buttonActive ? "active" : "desactive"}`}
        >
          {" "}
          °C{" "}
        </button>
        <button
          onClick={handleChange}
          className={`${buttonActive ? "desactive" : "active"}`}
        >
          {" "}
          °F{" "}
        </button>
      </div>
      <div id="miniCards" className="w-4/5 grid grid-cols-2  gap-8 mx-8 lg:flex lg:mx-28">
        {data ? (
          data.slice(0, 6).map((element, index) => {
            if (index === 0) return;
            return (
              <ForeCast
                key={index}
                index={index}
                element={element}
                buttonActive={buttonActive}
              />
            );
          })
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <DataDetails classname="w-full" globalData={globalData} />
    </section>
  );
}

export default Cards;
