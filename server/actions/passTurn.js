import store from "../store/store.js";

export default function (message, socket) {

  /*
  Description: Will pass a turn to the opposite color.

  message: {
    error: null,
      meta: {
        clientId
      },
    type: "REQUEST_PASS_TURN",
    payload: null
  }

  Function will find the client from the clientId and then the gameId. In the game, the turn will be switched
  and the pass variable checked-> If passes is 0, it will become 1 and the following reply sent to both clients:

  {
    error: null,
    meta: {
      clientId
    },
    type: "REQUEST_PASS_FINISHED",
    payload: {
      game  //I'll send it anyways since you might need it to know whose turn it is. it doesn't matter if you don't use it
    }
  }

  If passes is already 1, it will become 2 in the game object and the following reply sent to both clients:
  {
    error: null,
    meta: {
      clientId
    },
    type: "REQUEST_GAME_OVER",
    payload: {
      game,  //same reasoning here
      scores {
        white: num,
        black: num
      }
    }
  }

  Once the game is over, this function will also remove the game from the games list, remove the lobby from lobbies,
  and leave the clients as is until they disconnect. Post showing the scores, the front-end should redirect to main menu.
  */
};
