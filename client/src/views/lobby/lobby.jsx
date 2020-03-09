import React from "react";
import "./lobby.scss";
import { connect } from "react-redux";
import * as Actions from "store/actions/index.js";
import Network from "clientNetwork/clientNetwork.js";
import { Link } from "react-router-dom";
import store from "store/store.js";

export default connect((state) => {
  return {
    lobby: state.lobbies[state.currentLobby.lobbyId],
  };
}, (dispatch) => {
  return {};
})(class Lobby extends React.Component {
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

  leave = () => {
    store.dispatch(Actions.SET_CURRENT_LOBBY({ lobbyId: null, }));
    this.props.history.push("/matchmaker");
    Network.dispatch(Actions.REQUEST_LEAVE_LOBBY({ lobbyId: this.props.lobby.lobbyId, }));
  }

  start = () => {
    Network.dispatch(Actions.REQUEST_START_GAME({ lobbyId: this.props.lobby.lobbyId, }));
    this.props.history.push("/ingame");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //redirect to the game board if there's already a game running
    if (this.props.lobby.gameId) {
      this.props.history.push("/ingame");
    }
  }

  render() {
    return (
      <main className="lobby">
        <div className="content">
          <header>
            <h1>{this.props.lobby.lobbyName}</h1>
          </header>

          <div className={Object.keys(this.props.lobby.members).length < 2 ? "" : "hidden"}>Waiting for another player...</div>

          <nav>
            <button className="button danger" onClick={this.leave}>Leave</button>
            <button className={Object.keys(this.props.lobby.members).length >= 2 ? "button" : "button hidden"} onClick={this.start}>Start</button>
          </nav>
        </div>
      </main>
    );
  }
});
