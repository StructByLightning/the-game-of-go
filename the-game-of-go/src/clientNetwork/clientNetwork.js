import * as Actions from "store/actions/index.js";
import store from "store/store.js"

class ClientNetwork {
  constructor() {
    this.server = undefined;
    this.clientId = undefined;
  }

  listen() {
    setInterval(() => {
      if (!store.getState().misc.connected) {
        console.log("Connecting");
        this.server = new WebSocket(store.getState().misc.serverUrl);
        this.server.onopen = () => {
          this.dispatch(Actions.REQUEST_JOIN_SERVER({}));
        };

        this.server.onmessage = event => {
          const message = JSON.parse(event.data);

          console.log("Received message:", message)
          if (Actions.map[message.type]) {
            store.dispatch(Actions.map[message.type](message.payload, message.error, message.meta));
          }
          console.log("New store:", store.getState());
        };

        this.server.onclose = () => {
          this.server.close();
          store.dispatch(Actions.REQUEST_JOIN_SERVER());
        }
      }
    }, 5000);
  }

  dispatch(action) {
    console.log("Sent message:", action, "Current store:", store.getState());
    this.server.send(
      JSON.stringify({
        type: action.type,
        payload: action.payload,
        meta: {
          clientId: store.getState().misc.clientId,
        }
      })
    );
  }
}

const network = new ClientNetwork();
network.listen();
export default network;
