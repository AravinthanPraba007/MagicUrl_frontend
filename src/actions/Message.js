import { SET_MESSAGE, CLEAR_MESSAGE, SET_SUCESS_MESSAGE, CLEAR_SUCESS_MESSAGE } from "./Types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
})

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
})

export const setSucessMessage = (sucess_message) => ({
    type: SET_SUCESS_MESSAGE,
    payload: sucess_message,
  })
  
  export const clearSucessMessage = () => ({
    type: CLEAR_SUCESS_MESSAGE,
  })