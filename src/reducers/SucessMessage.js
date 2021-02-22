import { SET_MESSAGE, CLEAR_MESSAGE, SET_SUCESS_MESSAGE, CLEAR_SUCESS_MESSAGE } from "../actions/Types.js";

const initialState = {};

export default function sucessMessage(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SUCESS_MESSAGE:
        return { sucess_message: payload };
  
    case CLEAR_SUCESS_MESSAGE:
        return { sucess_message: "" };  

    default:
      return state;
  }
}