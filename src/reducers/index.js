import { combineReducers } from "redux";
import auth from "./Auth";
import message from "./Message";
import sucessMessage from "./SucessMessage";
import magicurl from "./MagicUrl";

export default combineReducers({
  auth,
  message,
  sucessMessage,
  magicurl
});