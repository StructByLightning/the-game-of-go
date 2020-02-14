import { combineReducers } from "redux";
import MiscReducer from "./reducers/misc.js";
import LobbiesReducer from "./reducers/lobbies.js";
import CurrentLobbyReducer from "./reducers/currentLobby.js";

export default combineReducers({
  misc: new MiscReducer().reducer,
  lobbies: new LobbiesReducer().reducer,
  currentLobby: new CurrentLobbyReducer().reducer,
});

