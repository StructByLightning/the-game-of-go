import { bindActionCreators } from "redux";
import * as Actions from "store/actions";
import BaseReducer from "./baseReducer";


export default class MiscReducer extends BaseReducer {
  initialState = {
    serverUrl: "ws://localhost:5000",
    connected: false,
    clientId: ""
  };

  [Actions.REQUEST_JOIN_SERVER_FINISHED().type](state, action) {
    return {
      ...state,
      connected: true,
      clientId: action.meta.clientId
    };
  }
}


