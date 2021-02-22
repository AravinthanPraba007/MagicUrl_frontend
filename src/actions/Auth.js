import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    SET_SUCESS_MESSAGE,
    CLEAR_MESSAGE,
    CLEAR_SUCESS_MESSAGE
  } from "./Types";

  import AuthService from "../services/UserDataService";


export const register = (userName,password) => (dispatch) => {
  return AuthService.signup(userName, password).then(
    (response) => {
        console.log("register")
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: CLEAR_MESSAGE,
      });

      const sucess_message = response.data.response_message;
      console.log(sucess_message)
      dispatch({
        type: SET_SUCESS_MESSAGE,
        payload: sucess_message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.response_message) ||
        error.message ||
        error.toString();


      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: CLEAR_SUCESS_MESSAGE,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


