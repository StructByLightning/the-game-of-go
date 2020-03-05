class Store {
  constructor() {
    this.state = {
      clients: {},
      lobbies: {},
      games: {},
    };

  }

  addClient = (id, socket) => {
    this.state.clients[id] = {
      clientId: id,
      socket,
      lobby: null,
      gameId: null
    }
  }

  setClientLobby = (clientId, lobbyId) => {
    let client = this.state.clients[clientId];
    let newLobby = this.state.lobbies[lobbyId];
    let oldLobby = this.state.lobbies[client.lobby];

    if (newLobby.members.length == 2)
      return false;

    //remove client from current lobby
    if (oldLobby) {
      let clientIndex = oldLobby.members.indexOf(clientId);
      if (clientIndex != -1)
        oldLobby.members.splice(clientIndex, 1);
    }

    //add client to new lobby
    client.lobby = lobbyId;
    if (!newLobby.members.includes(clientId)) {
      newLobby.members.push(clientId);
    }

    return true;
  }

  addLobby = (id, name) => {
    this.state.lobbies[id] = {
      lobbyId: id,
      lobbyName: name,
      members: [],
      gameId: null
    }
  }

  removeClientFromLobby = (clientId, lobbyId) => {
    let lobby = this.state.lobbies[lobbyId];
    if (lobby) {
      let clientIndex = lobby.members.indexOf(clientId);
      if (clientIndex != -1)
        lobby.members.splice(clientIndex, 1);
    }
  }

  //clean up after a client dcs
  deleteClient = (socket) => {
    //find clientId
    let clientId = null;
    for (const [key, value] of Object.entries(this.state.clients)) {
      if (value.socket === socket) {
        clientId = key;
      }
    }
    if (clientId) {

      //remove from main client list
      delete this.state.clients[clientId];

      //remove from any lobbies
      for (const [key, value] of Object.entries(this.state.lobbies)) {
        let clientIndex = value.members.indexOf(clientId);
        if (clientIndex != -1)
          value.members.splice(clientIndex, 1);
      }

      //remove from any games
      for (const [key, value] of Object.entries(this.state.games)) {
        let clientIndex = value.members.indexOf(clientId);
        if (clientIndex != -1)
          value.members.splice(clientIndex, 1);
      }

      console.log("Client disconnected", clientId)
    }
  }

  //get clients from lobby
  getClientsInLobby = (lobbyId) => {
    return this.state.lobbies[lobbyId].members;
  }

  setGameInLobby = (lobbyId, gameId) => {
    this.state.lobbies[lobbyId].gameId = gameId;
  }

  setGameInClient = (clientId, gameId) => {
    this.state.clients[clientId].gameId = gameId;
  }

  //add a game 
  addGame = (gameId, members) => {
    let board = [];
    for (let y = 0; y < 19; y++) {
      const row = [];
      for (let x = 0; x < 19; x++) {
        row.push({ x, y, state: null });
      }
      board.push(row);
    }

    let ran = Math.floor(Math.random() * 2);
    this.state.games[gameId] = {
      gameId,
      turn: "black",
      black: members[ran],
      white: members[!ran ? 1 : 0],
      members,
      board
    }

    return this.state.games[gameId];
  }
}

const store = new Store();

export default store;