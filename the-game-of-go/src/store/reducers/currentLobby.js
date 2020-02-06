import { bindActionCreators } from "redux";
import * as Actions from "store/actions";
import BaseReducer from "./baseReducer";


export default class CurrentLobbyReducer extends BaseReducer {
  initialState = { lobbyId: "lobby-id-1" };

  [Actions.SET_CURRENT_LOBBY().type](state, action) {
    return {
      lobbyId: action.payload.lobbyId
    };
  }
}


