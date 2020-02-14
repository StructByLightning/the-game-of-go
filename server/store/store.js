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


}

const store = new Store();

export default store;