import React from 'react';
import './ingame.scss';
import { connect } from 'react-redux'
import Network from "clientNetwork/clientNetwork.js";
import * as Actions from "store/actions/index.js";
import store from "store/store.js";

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

  cellClick = (x, y) => {
    let game = JSON.parse(JSON.stringify(this.props.game));

    game.board[y][x].state = "white";

    store.dispatch(Actions.REQUEST_PLACE_STONE_FINISHED({ game }))
  }

  render() {
    return (
      <main className="ingame">
        <div className="board">
          {this.props.game.board.map((row) => {
            return row.map((cell) => {
              let cssClass = "cell";
              let id = "cell" + cell.x + "-" + cell.y;

              return (
                <div
                  key={cell.x + "-" + cell.y}
                  id={id}
                  className={cssClass}
                  state={cell.state}
                  onClick={() => { this.cellClick(cell.x, cell.y) }}
                >
                </div>
              )
            })
          })}
        </div>

      </main>
    );
  }
})