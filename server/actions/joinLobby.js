import store from "../store/store.js";

export default function (message, socket) {

  let result = store.setClientLobby(message.meta.clientId, message.payload.lobbyId)

  socket.send(JSON.stringify({
    error: result ? null : "Lobby full",
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_JOIN_LOBBY_FINISHED",
    payload: {}
  }));

};