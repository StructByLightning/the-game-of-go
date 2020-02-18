import uuid from "uuid-random";
import store from "../store/store.js";

export default function (message, socket) {
  store.deleteClient(socket);
};