import store from "../store/store.js";

export default function (message, socket) {
  /*
    description:   
      should start a new game between two clients
     
    message: {
      error: null,
      meta: {
        clientId
      },
      type: "REQUEST_START_GAME",
      payload: {
        lobbyId
      }
    }


    - create a new game object and add it to store.games. game object should look like this:
      gameId: {
        gameId,
        turn: black|white,
        black: clientId, //of the player who's black
        white: clientId, //of the player who's white
        members: [] 
        board: [[{x, y, state:black|white|null}]] //one cell object for each cell in the board, arranged into a 2D array for easy indexing
      }
    - in the game object, set both black and white
    - in the client objects (found in store.clients), set the gameId
    - in the lobby object, set gameId
    - send a REQUEST_START_GAME_FINISHED message to both clients
      - payload should have a field called game that contains a copy of the game object
  */

  var id = uuid();
  var gameId = "game-" + id.slice(0, 4);
  var members = store.getClientsInLobby(message.payload.lobbyId);

  if (members.length != 2) {
    console.log("Lobby size is not 2", lobbyId);
    return;
  }

  store.setGameInLobby(message.payload.lobbyId, gameId);
  member.forEach(id => {
    store.setGameInClient(id, gameId);
  });

  var game = store.addGame(gameId, members);

  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_START_GAME_FINISHED",
    payload: {
      game
    }
  }));
};