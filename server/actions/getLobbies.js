import store from "../store/store.js";

export default function (message, socket) {
  console.log("Get lobbies", store.state.lobbies);


};