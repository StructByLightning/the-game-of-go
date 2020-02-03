import { combineReducers } from "redux";
import MiscReducer from "./reducers/misc.js";

export default combineReducers({
  misc: new MiscReducer().reducer,
});

