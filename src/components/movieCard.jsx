import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


  
export default function MovieCard({MovieData}) {

  return (
    <Card component={Link} to={`movie/${MovieData.id}`}  sx={{ width: 250 ,height:500, margin:"10px 5px" , background:"#008effb8" , color:"white" , textDecoration:"none"}} >
      <CardActionArea>
        <CardMedia
          sx={{'&:hover':{scale:'1.1'} , transition:"1s"}}
          component="img"
          height="auto" 
          image={`https://image.tmdb.org/t/p/w500${MovieData.poster_path}`}
          alt={MovieData.title}
        />
        <CardContent sx={{margin:"10px 0"}}>
          <Typography gutterBottom variant="h6" component="div" align='center'>
            {MovieData.title.split(" ").slice(0, 5).join(' ')}
          </Typography>
          <Typography sx={{color:"white"}} variant="subtitle2" color="text.secondary" align='center'>
            {MovieData.release_date}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}