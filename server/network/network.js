import WebSocket from "ws";
import { actions } from "../actions/index.js";

class Network {
  listen = (port, http) => {
    const socketServer = http.createServer();
    const wss = new WebSocket.Server({ server: socketServer });

    wss.on("connection", socket => {
      console.log("Socket connected");
      socket.on("message", message => {
        const data = JSON.parse(message);

        if (actions[data.type]) {
          console.log("Received message", data.type);
          actions[data.type](data, socket);
        } else {
          console.log("Unrecognized message", data);
        }
      });
      socket.on("error", error => {
        console.log("Socket error");
      })
      socket.on("close", message => {
        console.log("Socket closed");
      })
    });

    socketServer.listen(port, () => {
      console.log("Socket server started (port 5000)");
    });

  }
}

const network = new Network();
export default network;