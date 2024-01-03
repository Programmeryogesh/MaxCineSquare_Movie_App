import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


  
export default function MovieCard({MovieData}) {

  return (
    <Card component={Link} to={`movie/${MovieData.id}`}  sx={{ width: {lg:250 , md:200 , sm:150, xs:120} ,height:{lg:500 , md:400,sm:300,xs:180}, margin:"10px 5px" , background:"#008effb8" , color:"white" , textDecoration:"none"
    }} >
      <CardActionArea>
        <CardMedia
        
          sx={{'&:hover':{scale:'1.05'} , transition:"1s"}}
          component="img" 
          image={`https://image.tmdb.org/t/p/w500${MovieData.poster_path}`}
          alt={MovieData.title}
        />
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