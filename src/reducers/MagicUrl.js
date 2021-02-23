import {
    GENERATE_URL_FAIL,
    GENERATE_URL_SUCCESS
  } from "../actions/Types";
  
  
  const initialState = {};
  
  export default function magicurl(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GENERATE_URL_SUCCESS:
        return {
          shortUrl: payload,
        };
      case GENERATE_URL_FAIL:
        return {
            shortUrl: "",
        };
        
      default:
        return state;
    }
  }