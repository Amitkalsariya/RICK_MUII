
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Menu = () => {
    
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const value = 5;
  return (
    <div>
       <div className="des1">
       <h1>New Arrival</h1>
       </div>
       <div className="menu1">
        <ul className='flex j-center'>
            <li><a href="">All Products</a></li>
            <li><a href="">Furniture</a></li>
            <li><a href="">Bed & Bath</a></li>
            <li><a href="">Lighting</a></li>
            <li><a href="">Tableware</a></li>
            <li><a href="">Tableware</a></li>
            <li><a href="">Best Selling</a></li>
        
        </ul>
       </div>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://supro.noudeveloper.com/uploads/small_1b_8a96b4f17a.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
         Add To Cart
        </Typography>
        <Stack spacing={1}>
      
      <Rating  name='half-rating' value={value} defaultValue={2.5} precision={0.5} />
    </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Menu
