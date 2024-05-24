import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Cards = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  }));
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} rowSpacing={0.1}>
          <Grid item xs={12} sm={6}>
            <Item> 
              
        <img className="custom-img" src="https://supro.reactstorefronts.com/static/img/collection/home-2/simple-1.jpg" alt="" /></Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item><img className="custom-img" src="https://supro.reactstorefronts.com/static/img/collection/home-2/simple-2.jpg" alt="" /></Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item><img className="custom-img" src="https://supro.reactstorefronts.com/static/img/collection/home-1/1.jpg" alt="" /></Item>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Item><img className="custom-img" src="https://supro.reactstorefronts.com/static/img/collection/home-1/2.jpg" alt="" /></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Cards;
