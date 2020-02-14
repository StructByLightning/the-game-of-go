class Store {
  constructor() {
    this.state = {
      sockets: {},
      lobbies: {
        "lobby-id-1": {
          lobbyId: "lobby-id-1",
          lobbyName: "lobby-1",
          members: []
        },
        "lobby-id-2": {
          lobbyId: "lobby-id-2",
          lobbyName: "lobby-2",
          members: []
        }
      },
    };

  }

  associateIdWithSocket = (id, socket) => {
    this.state.sockets[id] = socket;
  }

  addLobby = (id, name) => {
    this.state.lobbies[i] = {
      lobbyId: id,
      lobbyName: name,
      members: []
    }
  }


}

const store = new Store();

export default store;