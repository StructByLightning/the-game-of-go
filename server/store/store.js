class Store {
  constructor() {
    this.state = {
      sockets: {},
      lobbies: {},
    };

  }

  associateIdWithSocket = (id, socket) => {
    this.state.sockets[id] = socket;
  }

  addLobby = (id, name) => {
    this.state.lobbies[id] = {
      lobbyId: id,
      lobbyName: name,
      members: []
    }
  }


}

const store = new Store();

export default store;