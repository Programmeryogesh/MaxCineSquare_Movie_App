
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

    {SearchMovies && <Typography variant="h4" sx={{marginTop:"10px"}} textAlign="center" color="white" >Search result</Typography>}
    <Box  sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" , marginTop:"20px" }}>

      {SearchMovies && SearchMovies.map((data) => (
        <Card component={Link} to={`movie/${data.id}`} sx={{ width: {lg:250 , md:200 , sm:150, xs:80} ,height:{lg:500 , md:400,sm:300,xs:120}, margin: "10px 5px", background: "#008effb8", color: "white", textDecoration: "none" }} >
          <CardActionArea>
            <CardMedia
              sx={{ '&:hover': { scale: '1.1' }, transition: "1s" }}
              component="img"
              key={data.id}
              height="auto"
              image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
            />
            <CardContent sx={{ margin: "10px 0" ,display:{xs:"none" , sm:"inherit"}, padding:{xs:0 , md:" 5px"}}}>
              <Typography gutterBottom variant="h6" component="div" align='center' sx={{fontSize:{lg:20,md:15 , sm:10 , xs:8}}}>
                {data.title.split(" ").slice(0, 5).join(' ')}
              </Typography>
              <Typography sx={{ color: "white" , fontSize:{lg:15,md:12 , sm:8 , xs:5}}} variant="subtitle2" color="text.secondary" align='center'>
                {data.release_date}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>

      ))}
    </Box>

  </>)
}
export default searchMoviesDataList;