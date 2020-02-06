import { bindActionCreators } from "redux";
import * as Actions from "store/actions";
import BaseReducer from "./baseReducer";


export default class LobbiesReducer extends BaseReducer {
  initialState = {
    "lobby-id-1": {
      lobbyId: "lobby-id-1",
      members: {
        "client-id-1": {
          username: "Anon User 1"
        }
      },
      lobbyName: "Anon's lobby 1"
    },
    "lobby-id-2": {
      lobbyId: "lobby-id-2",
      members: {
        "client-id-2": {
          username: "Anon User 2"
        }
      },
      lobbyName: "Anon's lobby 2"
    },
    "lobby-id-3": {
      lobbyId: "lobby-id-3",
      members: {
        "client-id-3": {
          username: "Anon User 3"
        }
      },
      lobbyName: "Anon's lobby 3"
    }
  };
}


