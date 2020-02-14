import React from 'react';
import './ingame.scss';
import { connect } from 'react-redux'

export default connect(
  (state) => {
    return {
      serverConnected: state.misc.connected
    };
  }, (dispatch) => ({})
)(class Ingame extends React.Component {
  render() {
    return (
      <div className="ingame">
        This is the game of Go.
        <div>
          Connected to server: {"" + this.props.serverConnected}
        </div>
      </div>
    );
  }
})