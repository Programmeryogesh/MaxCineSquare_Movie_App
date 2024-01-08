import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { setMovie } from '../store/actions/action';
import ToggleButton from '@mui/material/ToggleButton';

  
export default function MovieCard({MovieData}) {
  const dispatch = useDispatch()
  const movieAddIn = useSelector((state) => state.movie);
  // console.log(movieAddIn);
  function isAddedMovie() {
    return movieAddIn.some((oneObj) => oneObj.id == MovieData.id)
  }
  return (
    <Card  sx={{ width: {lg:250 , md:200 , sm:150, xs:110} ,height:{lg:500 , md:400,sm:300,xs:160}, margin:"10px 5px" , background:"#008effb8" , color:"white" , textDecoration:"none"
    }} >
      <CardActionArea>
        {isAddedMovie() ? (<FavoriteIcon sx={{position:"absolute" , zIndex:"99" , color:"red" , cursor:"pointer"}}/>) : (<FavoriteIcon   onClick={() => dispatch(setMovie(MovieData))} sx={{position:"absolute" , zIndex:"99" , color:"grey" , cursor:"pointer"}}/>)}
      
       <Box component={Link} to={`movie/${MovieData.id}`} >
       <CardMedia
          sx={{'&:hover':{scale:'1.05'} , transition:"1s"}}
          component="img" 
          image={`https://image.tmdb.org/t/p/w500${MovieData.poster_path}`}
          alt={MovieData.title}
        />
       </Box>
        <CardContent sx={{margin:"10px 0" , display:{xs:"none" , sm:"inherit"}}}>
          <Typography gutterBottom variant="h6" component="div" align='center' sx={{fontSize:{lg:20,md:15 , sm:10 , xs:8}}}>
            {MovieData.title.split(" ").slice(0, 5).join(' ')}
          </Typography>
          <Typography sx={{color:"white" , fontSize:{lg:15,md:12 , sm:8 , xs:5}}} variant="subtitle2" color="text.secondary" align='center'>
            {MovieData.release_date}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}