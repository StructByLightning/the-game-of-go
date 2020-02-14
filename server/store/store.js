class Store {
  constructor() {
    this.state = {
      clients: {},
      lobbies: {},
    };

  }

  addClient = (id, socket) => {
    this.state.clients[id] = {
      clientId: id,
      socket,
      lobby: null
    }
  }

  setClientLobby = (clientId, lobbyId) => {
    let client = this.state.clients[clientId];
    let newLobby = this.state.lobbies[lobbyId];
    let oldLobby = this.state.lobbies[client.lobby];

    //remove client from current lobby
    if (oldLobby) {
      oldLobby.members.splice(oldLobby.members.indexOf(clientId), 1);
    }

    //add client to new lobby
    client.lobby = lobbyId;
    if (!newLobby.members.includes(clientId)) {
      newLobby.members.push(clientId);
    }
  }

  addLobby = (id, name) => {
    this.state.lobbies[id] = {
      lobbyId: id,
      lobbyName: name,
      members: [],
      game: {}
    }
  }

  removeClientFromLobby = (clientId, lobbyId) => {
    let lobby = this.state.lobbies[lobbyId];
    if (lobby) {
      lobby.members.splice(lobby.members.indexOf(clientId), 1);
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

      let client = this.state.clients[clientId];

      //remove from main client list
      delete this.state.clients[clientId];

      //remove from any lobbies
      for (const [key, value] of Object.entries(this.state.lobbies)) {
        value.members.splice(value.members.indexOf(clientId), 1);
      }

      console.log("Client disconnected", clientId)
    }

  }


}

const store = new Store();

export default store;