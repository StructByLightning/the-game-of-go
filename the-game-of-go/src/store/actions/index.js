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


export const map = {
  "REQUEST_JOIN_SERVER_FINISHED": REQUEST_JOIN_SERVER_FINISHED,
}