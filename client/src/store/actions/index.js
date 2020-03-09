//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//internal actions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const SET_CURRENT_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "SET_CURRENT_LOBBY",
    error,
    meta,
    payload,
  };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//network-based actions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const REQUEST_JOIN_SERVER = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_SERVER",
    error,
    meta,
    payload,
  };
};
export const REQUEST_JOIN_SERVER_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_SERVER_FINISHED",
    error,
    meta,
    payload,
  };
};

export const REQUEST_GET_LOBBIES = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GET_LOBBIES",
    error,
    meta,
    payload,
  };
};
export const REQUEST_GET_LOBBIES_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GET_LOBBIES_FINISHED",
    error,
    meta,
    payload,
  };
};

export const REQUEST_JOIN_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_LOBBY",
    error,
    meta,
    payload,
  };
};
export const REQUEST_JOIN_LOBBY_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_LOBBY_FINISHED",
    error,
    meta,
    payload,
  };
};


export const REQUEST_CREATE_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_CREATE_LOBBY",
    error,
    meta,
    payload,
  };
};
export const REQUEST_CREATE_LOBBY_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_CREATE_LOBBY_FINISHED",
    error,
    meta,
    payload,
  };
};

export const REQUEST_LEAVE_LOBBY = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_LEAVE_LOBBY",
    error,
    meta,
    payload,
  };
};
export const REQUEST_LEAVE_LOBBY_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_LEAVE_LOBBY_FINISHED",
    error,
    meta,
    payload,
  };
};


export const REQUEST_START_GAME = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_START_GAME",
    error,
    meta,
    payload,
  };
};
export const REQUEST_START_GAME_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_START_GAME_FINISHED",
    error,
    meta,
    payload,
  };
};

export const REQUEST_PLACE_STONE = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_PLACE_STONE",
    error,
    meta,
    payload,
  };
};
export const REQUEST_PLACE_STONE_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_PLACE_STONE_FINISHED",
    error,
    meta,
    payload,
  };
};

export const REQUEST_PASS = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_PASS",
    error,
    meta,
    payload,
  };
};
export const REQUEST_PASS_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_PASS_FINISHED",
    error,
    meta,
    payload,
  };
};

export const REQUEST_GAME_OVER = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GAME_OVER",
    error,
    meta,
    payload,
  };
};
export const map = {
  "REQUEST_JOIN_SERVER_FINISHED": REQUEST_JOIN_SERVER_FINISHED,
  "REQUEST_GET_LOBBIES_FINISHED": REQUEST_GET_LOBBIES_FINISHED,
  "REQUEST_JOIN_LOBBY_FINISHED": REQUEST_JOIN_LOBBY_FINISHED,
  "REQUEST_CREATE_LOBBY_FINISHED": REQUEST_CREATE_LOBBY_FINISHED,
  "REQUEST_LEAVE_LOBBY_FINISHED": REQUEST_LEAVE_LOBBY_FINISHED,
  "REQUEST_PLACE_STONE_FINISHED": REQUEST_PLACE_STONE_FINISHED,
  "REQUEST_START_GAME_FINISHED": REQUEST_START_GAME_FINISHED,
  "REQUEST_PASS_FINISHED": REQUEST_PASS_FINISHED,
  "REQUEST_GAME_OVER": REQUEST_GAME_OVER,
};
