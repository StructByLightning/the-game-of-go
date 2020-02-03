import React from 'react';
import ReactDOM from 'react-dom';
import Lobby from 'views/lobby/lobby.jsx';
import * as serviceWorker from './serviceWorker';
import store from "store/store.js";
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom';
import Network from "clientNetwork/clientNetwork.js";

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={Lobby} />
    </HashRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
