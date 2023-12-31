import { Box, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import React from "react";


function MoviesDetailS() {
    const [CurrentMovieList, setCurrentMovieList] = useState([]);
    const { id } = useParams()
    async function ApiMovieData() {
        try {
            const API_KEY = "262bb92caae701a877463fecf9c7912d";
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            const result = await response.json();
            setCurrentMovieList(result);
        } catch (error) {
            
        }
       

    }
 
    useEffect(() => {
        ApiMovieData();
    }, [])

    const num = Number(CurrentMovieList.vote_average && CurrentMovieList.vote_average.toFixed(0));

    let image = `https://image.tmdb.org/t/p/w500${CurrentMovieList.backdrop_path}`


    return (
        <>


            {CurrentMovieList &&

                <Box p={4} sx={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" ,  backgroundImage: `url(${image})` , backgroundRepeat:"no-repeat" , backgroundSize:"100% 80%" , backgroundColor:"#0000008c" , backgroundBlendMode:"color-burn" }}>


                    <CardMedia
                        sx={{ width: '320px' , borderRadius:"10px", boxShadow:"0 0 10px 5px darkgrey"}}
                        component="img"
                        key={CurrentMovieList.id}
                        height="500"
                        image={`https://image.tmdb.org/t/p/w500${CurrentMovieList.poster_path}`}
                        alt="green iguana"
                    />
                    <Box sx={{ color: "white" }}>
                        <Typography  variant="h4">{CurrentMovieList.title}</Typography>
                        <Typography sx={{marginBottom:"10px"}} variant="h6" color="#b9b9b9" >{CurrentMovieList.tagline}</Typography>
                        <Rating sx={{marginBottom:"10px" , backgroundColor:"gray"}} name="read-only" value={num} readOnly max={10} />
                        <Box sx={{marginBottom:"15px"}}>
                            <Typography sx={{marginBottom:"10px"}} variant="h6">Genres</Typography>
                            {CurrentMovieList.genres && CurrentMovieList.genres.map((one) => (<Typography variant="caption" sx={{ backgroundColor: "#ffad00", marginRight: "10px", color: "black", padding: "5px", fontWeight: "700" }}>{one.name}</Typography>))}
                        </Box>
                        <Box maxWidth="400px" sx={{marginBottom:"10px"}}>
                            <Typography sx={{marginBottom:"5px"}} variant="h6">OverView</Typography>
                            <Typography variant="body1">{CurrentMovieList.overview}</Typography>
                        </Box>

                            <Typography sx={{marginBottom:"10px"}} variant="h6">Others</Typography>
                        <Box sx={{display:"flex" , gap:"40px" , flexWrap:"wrap"}}>
                            <Box>
                                <Box sx={{ display: "flex" , justifyContent:"space-between" , gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Budget</Typography><Typography color={"#ffad00"} variant="subtitle1">${CurrentMovieList.budget}</Typography></Box>
                                <Box sx={{ display: "flex" , justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Status</Typography><Typography color={"#ffad00"} variant="subtitle1">{CurrentMovieList.status}</Typography></Box>
                                <Box sx={{ display: "flex" ,justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Runtime</Typography><Typography color={"#ffad00"} variant="subtitle1">{CurrentMovieList.runtime}mins</Typography></Box>
                                <Box sx={{ display: "flex" ,justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" }}><Typography variant="subtitle1">Release Date</Typography><Typography color={"#ffad00"} variant="subtitle1">{CurrentMovieList.release_date}</Typography></Box>


                            </Box>
                            <Box>
                                <Box sx={{ display: "flex" ,justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Revenue</Typography><Typography color={"#ffad00"} variant="subtitle1">${CurrentMovieList.revenue}</Typography></Box>
                                <Box sx={{ display: "flex" ,justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Original Language</Typography><Typography color={"#ffad00"} variant="subtitle1">{CurrentMovieList.original_language}</Typography></Box>
                                <Box sx={{ display: "flex" ,justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Rating</Typography><Typography color={"#ffad00"} variant="subtitle1">{CurrentMovieList.vote_average}/10</Typography></Box>
                                <Box sx={{ display: "flex" ,justifyContent:"space-between", gap:"40px" , border:"1px solid white" , padding:"2px 5px" , borderRadius:"5px" , marginBottom:"20px"}}><Typography variant="subtitle1">Country</Typography><Typography color={"#ffad00"} variant="subtitle1">{CurrentMovieList.production_countries && CurrentMovieList.production_countries[0].name}</Typography></Box>
                            </Box>
                        </Box>


                    </Box>




                    {/* <h1 >{CurrentMovieList.title}</h1>
                       <img style={{width:"400px"}} src={`https://image.tmdb.org/t/p/w500${CurrentMovieList.homepage}`} alt="" />
                       <img style={{width:"400px"}} src={`https://image.tmdb.org/t/p/w500${CurrentMovieList.poster_path}`} alt="" />
                      <img src={`https://image.tmdb.org/t/p/w500${CurrentMovieList.backdrop_path}`} alt="" />
                      <p>{CurrentMovieList.overview}</p>
                      <img src={`https://image.tmdb.org/t/p/w500${ CurrentMovieList.belongs_to_collection && CurrentMovieList.belongs_to_collection.poster_path}`} alt="" />
                      <img src={`https://image.tmdb.org/t/p/w500${ CurrentMovieList.belongs_to_collection && CurrentMovieList.belongs_to_collection.backdrop_path}`} alt="" /> */}
                </Box>







            }

        </>
    )
}

export default MoviesDetailS;