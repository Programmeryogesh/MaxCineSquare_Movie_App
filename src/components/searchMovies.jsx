
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function searchMoviesDataList() {
  const value = useSelector((state) => state.inputValue);
  const [SearchMovies, setSearchMovies] = useState()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  async function SearchMovieData() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=262bb92caae701a877463fecf9c7912d`
      );
      const result = await response.json();
      setSearchMovies(result.results)
    } catch (error) {
      setError("An Error occurred while fetching request")
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    SearchMovieData();
  }, [value]);



  return (<>

    {SearchMovies && SearchMovies.map((data) => (
      <Card component={Link} to={`movie/${data.id}`} sx={{ width: 250, height: 500, margin: "10px 5px", background: "#008effb8", color: "white", textDecoration: "none" }} >
        <CardActionArea>
          <CardMedia
            sx={{ '&:hover': { scale: '1.1' }, transition: "1s" }}
            component="img"
            key={data.id}
            height="auto"
            image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
          <CardContent sx={{ margin: "10px 0" }}>
            <Typography gutterBottom variant="h6" component="div" align='center'>
              {data.title.split(" ").slice(0, 5).join(' ')}
            </Typography>
            <Typography sx={{ color: "white" }} variant="subtitle2" color="text.secondary" align='center'>
              {data.release_date}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>

    ))}

  </>)
}
export default searchMoviesDataList;