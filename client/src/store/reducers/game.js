import { bindActionCreators } from "redux";
import * as Actions from "store/actions";
import BaseReducer from "./baseReducer";


export default class GameReducer extends BaseReducer {
  initialState = {
    gameId: "",
    board: []
  };
  [Actions.REQUEST_START_GAME_FINISHED().type](state, action) {
    console.log("Received REQUEST_START_GAME_FINISHED")
    return {
      ...action.payload.game
    };
  }

  [Actions.REQUEST_PLACE_STONE_FINISHED().type](state, action) {
    return {
      ...action.payload.game
    };
  }


}


