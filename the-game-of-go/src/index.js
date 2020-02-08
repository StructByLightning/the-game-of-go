import React from 'react';
import ReactDOM from 'react-dom';
import store from "store/store.js";
import { Provider } from "react-redux";
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Lobby from 'views/lobby/lobby.jsx';
import Matchmaker from 'views/matchmaker/matchmaker.jsx';
import Ingame from 'views/ingame/ingame.jsx';
import Home from 'views/home/home.jsx';

import * as serviceWorker from './serviceWorker';
import Network from "clientNetwork/clientNetwork.js";
import "./variables.scss";
import "./index.scss";
import "./button.scss";

ReactDOM.render((
  <Provider store={store}>
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
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
