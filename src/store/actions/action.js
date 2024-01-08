
export const setInputValue = (value) => ({
    type: 'SET_INPUT_VALUE',
    payload: value,
  });

  export const setMovie = (movie)=>({
    type:"SET_MOVIE",
    payload: movie,
});
  
export const removeAddMovie = (movieId)=>({
  type:"REMOVE_MOVIE",
  payload: movieId,
});