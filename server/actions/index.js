import joinServer from "./joinServer.js";
import createLobby from "./createLobby.js";
import getLobbies from "./getLobbies.js";
import joinLobby from "./joinLobby.js";
import leaveLobby from "./leaveLobby.js";
import disconnectClient from "./disconnectClient.js";

export const actions = {
  "REQUEST_JOIN_SERVER": joinServer,
  "REQUEST_CREATE_LOBBY": createLobby,
  "REQUEST_GET_LOBBIES": getLobbies,
  "REQUEST_JOIN_LOBBY": joinLobby,
  "REQUEST_LEAVE_LOBBY": leaveLobby,
  "DISCONNECT_CLIENT": disconnectClient,
}