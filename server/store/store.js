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
    console.log(id)
  }

  setClientLobby = (clientId, lobbyId) => {
    this.state.clients[clientId].lobby = lobbyId;
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