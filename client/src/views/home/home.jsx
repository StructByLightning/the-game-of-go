import React from 'react';
import './home.scss';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom';

export default connect(
  (state) => {
    return {
      serverConnected: state.misc.connected
    };
  }, (dispatch) => ({})
)(class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <Route path="/home">
          <div className="menu">
            <header>
              <h1>Go</h1>
            </header>
            <nav>
              <Link className="button" to="/home/ingame">Continue</Link>
              <Link className="button" to="/matchmaker">Multiplayer</Link>
              <Link className="button" to="/home/settings">Settings</Link>
            </nav>
          </div>
        </Route>
        <Route exact path="/home/settings">
          <div className="settings">
            <div className="content">
              <h1>Settings</h1>
              <nav>
                <Link className="button" to="/home">Cancel</Link>
                <Link className="button danger" to="/home">Apply</Link>
              </nav>
            </div>
          </div>
        </Route>
      </main>
    );
  }
})