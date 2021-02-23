import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from "../actions/Types";
  
  
  const initialState = { isLoggedIn: false, userName: null };
  
  export default function auth(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          userName: payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };

      default:
        return state;
    }
  }