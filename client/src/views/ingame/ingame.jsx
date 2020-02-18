import React from 'react';
import './ingame.scss';
import { connect } from 'react-redux'

export default connect(
  (state) => {
    return {
      game: state.game
    };
  }, (dispatch) => ({})
)(class Ingame extends React.Component {
  constructor(props) {
    super(props);

    console.log("Game", this.props.game)

  }

  render() {
    return (
      <main className="ingame">
        <div className="board">
          {this.props.game.board.map((row) => {
            return row.map((cell) => {
              return (<div key={cell.x + "-" + cell.y} class={"cell " + cell.x + "-" + cell.y}>
              </div>)
            })
          })}
        </div>

      </main>
    );
  }
})