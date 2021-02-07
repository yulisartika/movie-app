import axios from "axios";

import { CINE_URL } from "../../Config/config";
import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  TOGGLE_HIDDEN_MENU,
  SET_CURRENT_USER,
} from "./user-types";

export const signInUser = (username, password) => {
  return (dispatch) => {
    return axios
      .post(`${CINE_URL}users/login`, {
        username,
        password,
      })
      .then((response) => {
        // console.log(response);
        localStorage.setItem("access_token", response.data.data.token);
        dispatch({ type: SIGN_IN_SUCCESS, payload: response.data.data.token });
      });
  };
};

export const signUpUser = (username, password, email) => {
  return (dispatch) => {
    return axios
      .post(`http://cors-anywhere.herokuapp.com/${CINE_URL}users/register`, {
        username,
        password,
        email,
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: SIGN_UP_SUCCESS, payload: response.data.message });
      });
  };
};

export const signOutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("access_token");
    dispatch({ type: SIGN_OUT_SUCCESS });
  };
};

// current user
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// toggle
export const ToggleMenuHidden = () => {
  return {
    type: TOGGLE_HIDDEN_MENU,
  };
};
