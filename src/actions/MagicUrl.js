import {
    GENERATE_URL_SUCCESS,
    GENERATE_URL_FAIL,
    SET_MESSAGE,
    SET_SUCESS_MESSAGE,
    CLEAR_MESSAGE,
    CLEAR_SUCESS_MESSAGE
} from "./Types";

import MagicUrlService from "../services/MagicUrlService";


export const generateUrl = (content, content_type, expiry_time, user_name) => (dispatch) => {
    return MagicUrlService.generateUrl(content, content_type, expiry_time, user_name).then(
        (response) => {
            // console.log(response)
            dispatch({
                type: GENERATE_URL_SUCCESS,
                payload: response.data.shortUrl,
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
            // console.log(error.response)
            const message =
                (error.response &&
                    error.response.data.response_message) ||
                error.message ||
                error.toString();


            dispatch({
                type: GENERATE_URL_FAIL,
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




