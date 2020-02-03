import React from 'react';
import './lobby.scss';
import { connect } from 'react-redux'

export default connect(
  (state) => {
    return {
      serverConnected: state.misc.connected
    };
  }, (dispatch) => ({})
)(class Lobby extends React.Component {
  render() {
    return (
      <div className="lobby">
        This is the game of Go.
        <div>
          Connected to server: {"" + this.props.serverConnected}
        </div>
      </div>
    );
  }
})