import React from 'react';
import './matchmaker.scss';
import { connect } from 'react-redux'
import Network from "clientNetwork/clientNetwork.js";
import * as Actions from "store/actions/index.js";
import store from "store/store.js";

export default connect(
  (state) => {
    return {
      lobbies: state.lobbies
    };
  }, (dispatch) => ({})
)(class Matchmaker extends React.Component {
  constructor(props) {
    super(props);

    this.intervalHandle = null;
  }

  lobbyOnclick = (lobbyId) => {
    console.log(lobbyId);
    store.dispatch(Actions.SET_CURRENT_LOBBY({ lobbyId }))
    this.props.history.push('/lobby');
    Network.dispatch(Actions.REQUEST_JOIN_GAME({ gameId: lobbyId }));
  }

  componentDidMount() {
    //immediate request an up to date list of lobbies
    Network.dispatch(Actions.REQUEST_GET_GAMES({}));

    //and also again every five seconds
    this.intervalHandle = setInterval(() => {
      Network.dispatch(Actions.REQUEST_GET_GAMES({}));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }


  render() {
    return (
      <main className="matchmaker">
        <section className="lobbies">
          <h1>Lobbies</h1>
          <nav>
            {Object.keys(this.props.lobbies).map((lobbyId) => {
              let lobby = this.props.lobbies[lobbyId];
              return (
                <div
                  key={lobbyId}
                  className="lobby"
                  onClick={() => { this.lobbyOnclick(lobbyId) }}
                >
                  {lobby.lobbyName} ({Object.keys(lobby.members).length}/2)
                </div>
              )
            })}
          </nav>
        </section>
      </main>
    );
  }
})