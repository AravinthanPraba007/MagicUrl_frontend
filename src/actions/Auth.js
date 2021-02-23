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


export const register = (userName, password) => (dispatch) => {
    return AuthService.signup(userName, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: CLEAR_MESSAGE,
            });

            const sucess_message = response.data.response_message;
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

export const login = (userName, password) => (dispatch) => {
    return AuthService.login(userName, password).then(
        (response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.user_name,
            });

            dispatch({
                type: CLEAR_MESSAGE,
            });

            const sucess_message = response.response_message;
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
                type: LOGIN_FAIL,
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

export const logout = () => (dispatch) => {
  
    dispatch({
      type: CLEAR_MESSAGE,
    });
  
    dispatch({
        type: CLEAR_SUCESS_MESSAGE,
      });

    dispatch({
      type: LOGOUT,
    });
  };



