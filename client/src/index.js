import React from "react";
import ReactDOM from "react-dom";
import store from "store/store.js";
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Lobby from "views/lobby/lobby.jsx";
import Matchmaker from "views/matchmaker/matchmaker.jsx";
import Ingame from "views/ingame/ingame.jsx";
import Home from "views/home/home.jsx";

import Network from "clientNetwork/clientNetwork.js";
import "./variables.scss";
import "./index.scss";
import "./button.scss";

//if the user reloads the page, send them back to homepage
window.location.hash = "";

ReactDOM.render(<Provider store={store}>
  <HashRouter>
    <Switch>
      <Redirect exact from="/" to="home" />
      <Route path="/home" component={Home} />
      <Route path="/matchmaker" component={Matchmaker} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/ingame" component={Ingame} />
    </Switch>
  </HashRouter>
</Provider>
, document.getElementById("root"));

