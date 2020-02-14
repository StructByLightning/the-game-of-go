import uuid from "uuid-random";
import store from "../store/store.js";

export default function (message, socket) {
  const id = uuid();

  store.associateIdWithSocket(socket, id);

  socket.send(JSON.stringify({
    error: null,
    meta: {
      clientId: uuid()
    },
    type: "REQUEST_JOIN_SERVER_FINISHED",
    payload: {}
  }));
};