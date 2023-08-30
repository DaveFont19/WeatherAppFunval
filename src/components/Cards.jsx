import React, { useState } from 'react'
import DataDetails from './cards/DataDetails'
import ForeCast from './cards/ForeCast'
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Cards({globalData, oneCall}) {
  const [data, setData] = useState (false);
  const [buttonActive, setButtonActive] = useState (true)
  console.log(oneCall)

  
  useEffect(() => {
      setData(oneCall.daily)
  }, [oneCall]);

  function handleClick(){
    setButtonActive(true)
  }
  function handleChange (){
    setButtonActive(false)
  }

  return (
    <section className='container lg:flex flex-col'>
    <div id='containerButtons' className='container flex'>
        <button onClick={handleClick}  className={buttonActive ? 'active' : 'desactive'}>  °C  </button>
        <button onClick={handleChange}  className={buttonActive ? 'desactive' : 'active'}>  °F  </button>
      </div>
    <div id='miniCards' className='grid grid-cols-2 gap-8 lg:flex mx-14'>
      { data ? (data.slice(0, 5).map((element, index) =>
        (<ForeCast
        key={index}
        element={element}
        buttonActive={buttonActive} />))) :  
          
          
(        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>)
      }
    </div>
        <DataDetails classname="w-full"
        globalData={globalData}/>
    </section>
  )
}

export default Cards