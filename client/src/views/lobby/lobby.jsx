import React from 'react';
import './lobby.scss';
import { connect } from 'react-redux'
import * as Actions from "store/actions/index.js";
import Network from 'clientNetwork/clientNetwork.js';

export default connect(
  (state) => {
    return {
      lobby: state.lobbies[state.currentLobby.lobbyId]
    };
  }, (dispatch) => ({})
)(class Lobby extends React.Component {
  constructor(props) {
    super(props);

    this.intervalHandle = null;
  }

  componentDidMount() {
    //and also again every few seconds
    this.intervalHandle = setInterval(() => {
      Network.dispatch(Actions.REQUEST_GET_LOBBIES({}));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }


  render() {
    return (
      <main className="lobby">
        <header>
          <h1>{this.props.lobby.lobbyName}</h1>
        </header>

        {Object.keys(this.props.lobby.members).length < 2 && (
          <div>
            Waiting for another player...
          </div>
        )}
        {Object.keys(this.props.lobby.members).length >= 2 && (
          <nav>
            <button className="button">Start</button>
          </nav>
        )}
      </main>
    );
  }
})