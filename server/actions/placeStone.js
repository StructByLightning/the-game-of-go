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

  //I wrote this as a quick and dirty way to get some interactivity
  //you will need to replace most of this with accessors
  //also don't forget to verify legality
  //and remove stones if they're surrounded

  let clientId = message.meta.clientId;
  let client = store.state.clients[clientId];
  let gameId = client.gameId;
  let game = store.state.games[gameId];

  if (game == null)
    return;

  let color = null;
  if (game.black === clientId) {
    color = "black";
  } else if (game.white === clientId) {
    color = "white";
  }

  game.board[message.payload.y][message.payload.x].state = color;

  if (color === "black") {
    game.turn = "white";
  } else if (color === "white") {
    game.turn = "black";
  }

  let members = game.members;

  members.map((clientId) => {
    store.state.clients[clientId].socket.send(JSON.stringify({
      error: null,
      meta: {
        clientId
      },
      type: "REQUEST_PLACE_STONE_FINISHED",
      payload: {
        game
      }
    }));

  })


};