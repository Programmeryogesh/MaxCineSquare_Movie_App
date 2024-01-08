
const initialState = {
  inputValue: '',
  movie:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        movie: [...state.movie, action.payload],
      };
    case 'SET_INPUT_VALUE':
      return {
      
         ...state,
          inputValue: action.payload 
      };

      case "REMOVE_MOVIE":
            return{
              ...state,
              movie: state.movie.filter(item => item.id !== action.payload)
            };
    default:
      return state;
  }
};

export default rootReducer;

