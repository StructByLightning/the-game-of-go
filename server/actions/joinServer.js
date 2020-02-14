import uuid from "uuid-random";
import store from "../store/store.js";

export default function (message, socket) {
  const id = uuid();

  store.addClient(id, socket);

  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: id
    },
    type: "REQUEST_JOIN_SERVER_FINISHED",
    payload: {}
  }));
};