import { GET_MOVIE_DETAILS } from "./movieDetail-types";

const initialState = {
  movieDetails: null,
};

const movieDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: payload,
      };

    default:
      return { ...state };
  }
};

export default movieDetailReducer;
