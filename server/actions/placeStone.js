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

  let clientId = message.meta.clientId;
  let client = store.state.clients[clientId];
  let gameId = client.gameId;
  if (gameId == null)
    return;

  let game = store.state.games[gameId];
  if (game == null)
    return;

  let y = message.payload.y;
  let x = message.payload.x;

  let errorReply = {
    error: "ERROR_ILLEGAL_MOVE",
    meta: {
      clientId
    },
    type: "REQUEST_PLACE_STONE_FINISHED",
    payload: {
      game
    }
  };

  let clientTurnId = game.turn === "black" ? game.black : game.white;

  if (game.board[y][x].state != null || clientId != clientTurnId) {
    store.state.clients[clientId].socket.send(JSON.stringify(errorReply));
    return;
  }
  let newBoard = JSON.parse(JSON.stringify(game.board)); //copy over board
  newBoard[y][x].state = game.turn;
  let oppCol = game.turn === "black" ? "white" : "black";

  let toCapture = captureAll(newBoard, game.turn, oppCol);

  if (toCapture.length == 0) {
    let selfCapture = captureAll(newBoard, oppCol, game.turn);
    if (selfCapture.length > 0) {
      store.state.clients[clientId].socket.send(JSON.stringify(errorReply));
      return;
    }
  }

  game.board[y][x].state = game.turn;
  game.turn = oppCol;
  game.passes = 0;
  toCapture.forEach(cell => game.board[cell.y][cell.x].state = null);

  game.members.map((clientId) => {
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