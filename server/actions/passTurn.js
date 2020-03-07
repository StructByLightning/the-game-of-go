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

  Once the game is over, the front-end shows the score and should the clients choose to disconnect, all their data 
  is automatically deleted
  */

  let clientId = message.meta.clientId;
  let client = store.state.clients[clientId];
  let game = store.state.games[client.gameId];

  let clientTurnId = game.turn === "black" ? game.black : game.white;

  let errorReply = {
    error: "ERROR_ILLEGAL_PASS",
    meta: {
      clientId
    },
    type: "REQUEST_PASS_FINISHED",
    payload: {
      game
    }
  };

  if (clientId != clientTurnId) {
    store.state.clients[clientId].socket.send(JSON.stringify(errorReply));
    return;
  }

  if (!game.passes) {
    game.passes = 1;
    game.turn = game.turn === "black" ? "white" : "black";
    game.members.map((clientId) => {
      store.state.clients[clientId].socket.send(JSON.stringify({
        error: null,
        meta: {
          clientId
        },
        type: "REQUEST_PASS_FINISHED",
        payload: {
          game
        }
      }));
    })
    return;
  }

  if (game.passes == 1) {
    game.passes = 2;
    let black = captureAll(game.board, "black", null).length;
    let white = captureAll(game.board, "white", null).length;

    game.Board.forEach(row => {
      row.forEach(cell => {
        black += cell.state == "black" ? 1 : 0;
        white += cell.state == "white" ? 1 : 0;
      });
    });

    game.members.map((clientId) => {
      store.state.clients[clientId].socket.send(JSON.stringify({
        error: null,
        meta: {
          clientId
        },
        type: "REQUEST_GAME_OVER",
        payload: {
          game,
          scores: {
            white,
            black
          }
        }
      }));
    });
  }
};

const contains = (array, cellA) => {
  for (var cellB of array) {
    if (cellA.x === cellB.x && cellA.y === cellB.y && cellA.state === cellB.state)
      return true;
  };
  return false;
}

const captureAll = (board, guardCol, prisonCol) => {
  let visited = [];
  let allgroups = [];

  board.forEach(row => {
    row.forEach(cell => {
      if (cell.state === prisonCol && !contains(visited, cell)) {
        let group = [];
        if (captureAllRec(board, cell, group, guardCol, prisonCol))
          allgroups.push(...group);
        visited.push(...group);
      }
    });
  });
  return allgroups;
}

const captureAllRec = (board, cell, group, guardCol, prisonCol) => {
  group.push(cell);
  let adjacencies = [[cell.x - 1, cell.y], [cell.x, cell.y - 1], [cell.x + 1, cell.y], [cell.x, cell.y + 1]];

  for (var elem of adjacencies) {
    if (elem[0] < 19 && elem[0] >= 0 && elem[1] < 19 && elem[1] >= 0) {
      let adjCell = board[elem[1]][elem[0]];
      if (adjCell.state === prisonCol && !contains(group, adjCell)) {
        if (!captureAllRec(board, adjCell, group, guardCol, prisonCol))
          return false;
      } else if (adjCell.state != prisonCol && adjCell.state != guardCol)
        return false;
    }
  };
  return true;
}
