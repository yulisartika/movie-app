import MovieActionTypes from "./movie-types";
import { fetchData } from "../../Services/MovieService";
import { fetchGrid } from "../../Services/MovieGridService";

export const getMoviesSuccess = () => ({
  type: MovieActionTypes.SET_MOVIE_DATA_SUCCESS,
});

export function getMovies() {
  return (dispatch) => {
    fetchData().then((data) => {
      const movieData = data[0].data.result.map((results) => results);
      var newArray = Array.prototype.concat.apply([], movieData);
      // console.log(movieData);
      // console.log(newArray);
      dispatch({
        type: MovieActionTypes.SET_MOVIE_DATA,
        payload: newArray,
      });
    });
    fetchGrid().then((data) => {
      const movieGridData = data.map(({ results }) => results[0]);
      var newArray = Array.prototype.concat.apply([], movieGridData);
      dispatch({
        type: MovieActionTypes.SET_MOVIE_GRID_DATA,
        payload: newArray,
      });
      dispatch(getMoviesSuccess());
    });
  };
}
