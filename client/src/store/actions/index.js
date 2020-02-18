//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Internal actions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const SET_CURRENT_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "SET_CURRENT_LOBBY",
    error,
    meta,
    payload
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Network-based actions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const REQUEST_JOIN_SERVER = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_SERVER",
    error,
    meta,
    payload
  }
};
export const REQUEST_JOIN_SERVER_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_SERVER_FINISHED",
    error,
    meta,
    payload
  }
};

export const REQUEST_GET_LOBBIES = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GET_LOBBIES",
    error,
    meta,
    payload
  }
};
export const REQUEST_GET_LOBBIES_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GET_LOBBIES_FINISHED",
    error,
    meta,
    payload
  }
};

export const REQUEST_JOIN_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_LOBBY",
    error,
    meta,
    payload
  }
};
export const REQUEST_JOIN_LOBBY_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_LOBBY_FINISHED",
    error,
    meta,
    payload
  }
};


export const REQUEST_CREATE_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_CREATE_LOBBY",
    error,
    meta,
    payload
  }
};
export const REQUEST_CREATE_LOBBY_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_CREATE_LOBBY_FINISHED",
    error,
    meta,
    payload
  }
};

export const REQUEST_LEAVE_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_LEAVE_LOBBY",
    error,
    meta,
    payload
  }
};
export const REQUEST_LEAVE_LOBBY_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_LEAVE_LOBBY_FINISHED",
    error,
    meta,
    payload
  }
};

export const REQUEST_PLACE_STONE = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_PLACE_STONE",
    error,
    meta,
    payload
  }
};
export const REQUEST_PLACE_STONE_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_PLACE_STONE_FINISHED",
    error,
    meta,
    payload
  }
};

export const map = {
  "REQUEST_JOIN_SERVER_FINISHED": REQUEST_JOIN_SERVER_FINISHED,
  "REQUEST_GET_LOBBIES_FINISHED": REQUEST_GET_LOBBIES_FINISHED,
  "REQUEST_JOIN_LOBBY_FINISHED": REQUEST_JOIN_LOBBY_FINISHED,
  "REQUEST_CREATE_LOBBY_FINISHED": REQUEST_CREATE_LOBBY_FINISHED,
  "REQUEST_LEAVE_LOBBY_FINISHED": REQUEST_LEAVE_LOBBY_FINISHED,
  "REQUEST_PLACE_STONE_FINISHED": REQUEST_PLACE_STONE_FINISHED,
}