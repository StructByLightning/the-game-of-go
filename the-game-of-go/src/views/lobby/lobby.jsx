import React from 'react';
import './lobby.scss';
import { connect } from 'react-redux'

export default connect(
  (state) => {
    return {
      lobby: state.lobbies[state.currentLobby.lobbyId]
    };
  }, (dispatch) => ({})
)(class Lobby extends React.Component {
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

        <nav>
          <button className="button">Start</button>
        </nav>
      </main>
    );
  }
})