import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import { IconButton, 
Typography, Stack } from '@mui/material';

function Arrow({globalData}) {
    console.log(globalData.wind)
  return (
    <Stack className='flex content-center items-center  gap-1 flex-row'>
        <IconButton sx={{ backgrounColor: "#585676"}} size='small'>
        <NavigationIcon sx={{transform:`rotate(${globalData.wind.deg})` }}/>
        </IconButton>
        <Typography sx={{color: "#E7E7EB"}}>wsw</Typography>
    </Stack>
  )
}

export default Arrow
