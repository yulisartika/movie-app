import axios from "axios";

import { CINE_URL } from "../../Config/config";
import { GET_MOVIE_DETAILS } from "./movieDetail-types";

export const getMovieDetails = (params) => {
  const { id } = params;
  return (dispatch) => {
    return axios
      .get(`https://cors-anywhere.herokuapp.com/${CINE_URL}movies/id?id=${id}`)
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data.data);
          dispatch({
            type: GET_MOVIE_DETAILS,
            payload: response.data.data,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};
