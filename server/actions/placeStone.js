import store from "../store/store.js";

export default function (message, socket) {
  /*
    description:
      should attempt to place a stone on the board
  
    message: {
      error: null,
      meta: {
        clientId
      },
      type: "REQUEST_PLACE_STONE",
      payload: {
        x,
        y
      }
    }

    instructions:
    - determine whether the stone placement is legal (I don't know offhand if you can make illegal moves)
    - if not legal:
        send a REQUEST_PLACE_STONE_FINISHED to the client placing the stone. Set the error field to ERROR_ILLEGAL_MOVE. 
    - otherwise:
        - place the stone by going into the game board and setting the state of the appropriate cell
        - perform any updates to the game board (removing stones etc)
        - set the turn field in the game object to the opposite color  
        - send a REQUEST_PLACE_STONE_FINISHED message to both clients. payload: {
          game //copy of the game object
        }
  */
};