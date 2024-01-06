import { useEffect, useState } from 'react';
import MovieCard from './movieCard';
import { Box, Button, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SearchMovieDataList from './searchMovies';
import { useSelector } from 'react-redux';

function HomePage() {

  const [MovieData, setMovieData] = useState([]);
  const [activeButton, setActiveButton] = useState('popular');
  const [count, setCount] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const value = useSelector((state) => state.inputValue);
  // console.log(value);




  async function ApiMovieData() {
    try {
      const API_KEY = "262bb92caae701a877463fecf9c7912d";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${activeButton}?api_key=${API_KEY}&language=en-US&page=${count}`
      );
      const result = await response.json();
      setMovieData(result.results);
    } catch (error) {
      setError("An Error occurred while fetching request")
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    ApiMovieData();
  }, [count, activeButton]);

  const buttonNames = ['popular', 'top_rated', 'upcoming', 'now_playing'];

  function handleClick(buttonKey) {
    setActiveButton(buttonKey);
  };
  function NextPage() {
    setCount(count + 1);
  }

  function PrePage() {
    if (count > 1) {
      setCount(count - 1);
    }
  }


  return (<>

    {error && MovieData && <Typography m={6} sx={{ textAlign: "center", color: "red" }}>Error: {error}</Typography>}
    {value !== "" && <SearchMovieDataList />}

   {value === "" && <Box>
   <Box sx={{ width: "94vw", margin:{xs:"0 auto 0 auto" ,sm:"30px auto 0 auto"} }}>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {MovieData && MovieData.map((one) => (

          <img
            style={{ height: "400px", objectFit: "contain" }}
            srcSet={`https://image.tmdb.org/t/p/w500${one.backdrop_path}`}
            src={`https://image.tmdb.org/t/p/w500${one.backdrop_path}`}
            alt={one.title}
            loading="lazy"
          />

        ))}
      </Carousel>
    </Box> </Box>}

    <Box m={3} textAlign="center">
      {buttonNames.map((buttonKey, index) => (
        <Button
          key={index}
          sx={{ margin:{xs:"0 2px" , sm:"5px 10px"} , width:{xs:"65px" , sm:"110px" , md:"160px"} , fontSize:{xs:7 , sm:13 , md:16}}}
          onClick={() => handleClick(buttonKey)}
          variant={activeButton === buttonKey ? 'contained' : 'outlined'}
        >
          {buttonKey}
        </Button>
      ))}
    </Box>
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {MovieData && MovieData.map((data) => (
        <MovieCard MovieData={data} />
      ))}
    </Box>
    <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <Button variant="outlined" onClick={() => PrePage()}>Pre</Button> <Typography variant='body1' sx={{ display: "flex", alignItems: "center", color: "white" }}>{count}</Typography> <Button onClick={() => NextPage()} variant="outlined">Next</Button>
    </Box>
    



  </>)
}

export default HomePage;