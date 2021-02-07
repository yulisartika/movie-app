import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SET_CURRENT_USER,
  TOGGLE_HIDDEN_MENU,
} from "./user-types";

const initialState = {
  token: localStorage.getItem("access_token") || "",
  currentUser: null,
  hidden: true,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: payload,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case TOGGLE_HIDDEN_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return { ...state };
  }
};

export default userReducer;
