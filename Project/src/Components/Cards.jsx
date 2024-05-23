import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Cards = () => {
   
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <img src="https://supro.reactstorefronts.com/static/img/collection/home-2/simple-1.jpg" alt="" />
        </Grid>
        <Grid item xs={6}>
          <img src="https://supro.reactstorefronts.com/static/img/collection/home-2/simple-2.jpg" alt="" />
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Cards
