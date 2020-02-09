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

export const REQUEST_GET_GAMES = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GET_GAMES",
    error,
    meta,
    payload
  }
};
export const REQUEST_GET_GAMES_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_GET_GAMES_FINISHED",
    error,
    meta,
    payload
  }
};

export const REQUEST_JOIN_GAME = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_GAME",
    error,
    meta,
    payload
  }
};
export const REQUEST_JOIN_GAME_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_JOIN_GAME_FINISHED",
    error,
    meta,
    payload
  }
};


export const REQUEST_CREATE_GAME = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_CREATE_GAME",
    error,
    meta,
    payload
  }
};
export const REQUEST_CREATE_GAME_FINISHED = (payload = {}, error = false, meta = {}) => {
  return {
    type: "REQUEST_CREATE_GAME_FINISHED",
    error,
    meta,
    payload
  }
};

export const map = {
  "REQUEST_JOIN_SERVER_FINISHED": REQUEST_JOIN_SERVER_FINISHED,
  "REQUEST_GET_GAMES_FINISHED": REQUEST_GET_GAMES_FINISHED,
  "REQUEST_JOIN_GAME_FINISHED": REQUEST_JOIN_GAME_FINISHED,
  "REQUEST_CREATE_GAME_FINISHED": REQUEST_CREATE_GAME_FINISHED,
}