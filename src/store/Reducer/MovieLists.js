import { GET_MOVIES, GET_MOVIE_DETAILS, SET_WATCHLIST_MOVIES } from "./type";

const initialState = {
  movies: [],
  movieDetails: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
