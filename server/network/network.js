import WebSocket from "ws";
import { actions } from "../actions/index.js";
import store from "../store/store.js";
import fs from "fs";

class Network {
  listen = (port, https) => {
    const socketServer = https.createServer({
      cert: fs.readFileSync('/etc/letsencrypt/live/ravenschultz.com/cert.pem'),
      key: fs.readFileSync('/etc/letsencrypt/live/ravenschultz.com/privkey.pem')
      
    });

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
        console.log("Socket closed", message);
        actions["DISCONNECT_CLIENT"](null, socket);
      })
    });

    socketServer.listen(port, () => {
      console.log("Socket server started (port 5000)");
    });

  }
}

const network = new Network();
export default network;