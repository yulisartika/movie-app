import axios from "axios";

import { GET_MOVIES, GET_MOVIE_DETAILS } from "../Reducer/type";
import { apiURL, apiKey } from "../../constants/api";

export const getMovies = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.results);
          dispatch({
            type: GET_MOVIES,
            payload: response.data.results,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};

export const getMovieDetails = (params) => {
  const { id } = params;
  return (dispatch) => {
    return axios
      .get(`${apiURL}movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: GET_MOVIE_DETAILS,
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};
