import uuid from "uuid-random";
import store from "../store/store.js";

export default function (message, socket) {
  console.log("Create lobby");

  const id = uuid();
  const name = "lobby-" + id.slice(0, 4);

  store.addLobby(id, name);


  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: message.meta.clientId
    },
    type: "REQUEST_CREATE_LOBBY_FINISHED",
    payload: {
      lobbies: store.state.lobbies
    }
  }));

};