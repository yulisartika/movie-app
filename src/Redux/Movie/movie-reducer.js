import MovieActionTypes from "./movie-types";

const INITIAL_STATE = {
  isFetching: true,
  isAdditionalFetching: true,
  movieItems: [],
  movieGridItems: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MovieActionTypes.SET_MOVIE_DATA: {
      return { ...state, movieItems: payload };
    }
    case MovieActionTypes.SET_MOVIE_GRID_DATA: {
      return { ...state, movieGridItems: payload };
    }
    case MovieActionTypes.SET_MOVIE_DATA_SUCCESS: {
      return { ...state, isFetching: false };
    }
    case MovieActionTypes.SET_MOVIE_ADDITIONAL_DATA_SUCCESS: {
      return { ...state, isAdditionalFetching: false };
    }

    default:
      return state;
  }
};

export default movieReducer;
