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
    },
    "lobby-id-4": {
      lobbyId: "lobby-id-4",
      members: {
        "client-id-4": {
          username: "Anon User 4"
        }
      },
      lobbyName: "Anon's lobby 4"
    },
    "lobby-id-5": {
      lobbyId: "lobby-id-5",
      members: {
        "client-id-5": {
          username: "Anon User 5"
        }
      },
      lobbyName: "Anon's lobby 5"
    },
    "lobby-id-6": {
      lobbyId: "lobby-id-6",
      members: {
        "client-id-6": {
          username: "Anon User 6"
        }
      },
      lobbyName: "Anon's lobby 6"
    },
    "lobby-id-7": {
      lobbyId: "lobby-id-7",
      members: {
        "client-id-7": {
          username: "Anon User 7"
        }
      },
      lobbyName: "Anon's lobby 7"
    },
    "lobby-id-8": {
      lobbyId: "lobby-id-8",
      members: {
        "client-id-8": {
          username: "Anon User 8"
        }
      },
      lobbyName: "Anon's lobby 8"
    }
  };
}


