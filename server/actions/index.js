import joinServer from "./joinServer.js";
import createLobby from "./createLobby.js";
import getLobbies from "./getLobbies.js";
import joinLobby from "./joinLobby.js";

export const actions = {
  "REQUEST_JOIN_SERVER": joinServer,
  "REQUEST_CREATE_LOBBY": createLobby,
  "REQUEST_GET_LOBBIES": getLobbies,
  "REQUEST_JOIN_LOBBY": joinLobby,
}