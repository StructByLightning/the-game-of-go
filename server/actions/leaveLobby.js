import store from "../store/store.js";

export default function (message, socket) {
  store.removeClientFromLobby(message.meta.clientId, message.payload.lobbyId);

  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_LEAVE_LOBBY_FINISHED",
    payload: {
      lobbies: store.state.lobbies
    }
  }));

};