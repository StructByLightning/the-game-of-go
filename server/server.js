//setup html server
console.log("Starting web server...");
import express from "express";
import path from "path";
import http from "http";
import https from "https";
import fs from "fs";
import network from "./network/network.js";
const __dirname = path.resolve();

//uncomment for prod
const privateKey = fs.readFileSync('/etc/letsencrypt/live/ravenschultz.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/ravenschultz.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/ravenschultz.com/chain.pem', 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};


const httpsExpress = express();
//special path for letsencrypt challenge
//httpsExpress.get("/.well-known/acme-challenge/ahQ5kcUGlSCNDefE353mq-H11zcZPXKAcZ4V6GHaN34", function response(req, res) {
//  res.sendFile(path.join(__dirname + "/../letsencrypt-secret.txt"));
//});

//serve files from /build if it exists
httpsExpress.use(express.static("./build"));

//otherwise just return the index since this is a spa
httpsExpress.get("*", function response(req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const httpsServer = https.createServer(credentials, httpsExpress);


httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});


const httpExpress = express();


httpExpress.get("*", function response(req, res) {
  res.redirect("https://" + req.headers.host + req.url);
});


const httpServer = http.createServer(httpExpress);


httpServer.listen(80, () => {
  console.log('HTTP Server running on port 80');
});

/*

//comment this http stuff out for prod

const httpExpress = express();

//serve files from /build if it exists
httpExpress.use(express.static("./build"));

//otherwise just return the index since this is a spa
httpExpress.get("*", function response(req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});


const httpServer = http.createServer(httpExpress);
httpServer.listen(80, () => {
  console.log("Web server started (port 80)");
});
*/

//socket server stuff

network.listen(5000, https);