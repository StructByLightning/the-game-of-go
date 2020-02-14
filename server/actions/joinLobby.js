import store from "../store/store.js";

export default function (message, socket) {

  store.setClientLobby(message.meta.clientId, message.payload.lobbyId)

  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_JOIN_LOBBY_FINISHED",
    payload: {}
  }));

};