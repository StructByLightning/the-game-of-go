import store from "../store/store.js";

export default function (message, socket) {
  console.log("Join lobby");

  store.setClientLobby(message.meta.clientId, message.payload.lobbyId)

  console.log(message.payload.lobbyId);
  console.log(store.state.clients[message.meta.clientId])

  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_JOIN_LOBBY_FINISHED",
    payload: {}
  }));

};