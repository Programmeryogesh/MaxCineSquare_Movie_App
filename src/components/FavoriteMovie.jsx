import { Divider, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box, fontSize } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddMovie } from '../store/actions/action';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';




function FavoriteCartComponent() {
    const movieAddIn = useSelector((state) => state.movie);
    console.log(movieAddIn);

    const dispatch = useDispatch();
    
   
    return (<>
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
                <Box mt={1}>
                    <Typography variant='h4' align='center' color="#008effb8" sx={{textShadow:"0 2px 4px #ff0000;" , fontFamily:"cursive"}} gutterBottom>Your Favorite Movies</Typography>
                    {movieAddIn.length === 0 ? (
                        <Typography variant='h5' color="red" align='center'>Your Favorite Movie cart is Empty</Typography>
                    ) : (
                        movieAddIn.map((item) => (
                            <Paper
                            key={item.id}
                                elevation={3}
                                style={{marginBottom:"16px"}}
                            >
                                <Box p={3} display="flex" justifyContent="space-between" alignItems="center">
                                    <Box>
                                    <Typography variant='h5'>{item.title}</Typography>
                                    <Typography variant='body2' my={1}>{item.overview}</Typography>
                                    <Typography variant='subtitle1' sx={{color:"darkblue"}}>{item.release_date}</Typography>

                                    <Rating sx={{ marginBottom: "10px", marginTop:"10px"}} name="read-only" value={item.vote_average.toFixed(0)} readOnly max={10} />    
                                    </Box>
                                    <Box mx={2}>
                                       <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="movie Image" style={{ maxWidth:"200px" , maxHeight:"250px"}} />
                                    </Box>
                                </Box>
                                <Divider />
                                <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
                                   
                                    <Box>
                                        <Button variant="contained"   
                                        onClick={()=> dispatch(removeAddMovie(item.id))}>Remove</Button>
                                    </Box>
                                    <Box><Button variant="contained" component={Link} to={`movie/${item.id}`}>More Info</Button></Box>

                                </Box>
                            </Paper>
                        ))
                    )}
                    
                </Box>

            </Grid>
        </Grid>


    </>)
}

export default FavoriteCartComponent;