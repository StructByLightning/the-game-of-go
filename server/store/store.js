class Store {
  constructor() {
    this.state = {
      sockets: {}
    };
  }

  associateIdWithSocket = (id, socket) => {
    this.state.sockets[id] = socket;
  }
}

const store = new Store();

export default store;