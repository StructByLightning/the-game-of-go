import { bindActionCreators } from "redux";
import * as Actions from "store/actions";
import BaseReducer from "./baseReducer";


export default class LobbiesReducer extends BaseReducer {
  initialState = {
  };

  [Actions.REQUEST_GET_LOBBIES_FINISHED().type](state, action) {
    return {
      ...action.payload.lobbies
    };
  }
  [Actions.REQUEST_CREATE_LOBBY_FINISHED().type](state, action) {
    return {
      ...action.payload.lobbies
    };
  }

}


