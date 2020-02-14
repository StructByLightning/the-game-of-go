import store from "../store/store.js";

export default function (message, socket) {
  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_GET_LOBBIES_FINISHED",
    payload: {
      lobbies: store.state.lobbies
    }
  }));

};