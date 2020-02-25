import React from 'react';
import './ingame.scss';
import { connect } from 'react-redux'
import Network from "clientNetwork/clientNetwork.js";
import * as Actions from "store/actions/index.js";
import store from "store/store.js";

export default connect(
  (state) => {
    let color = null;
    if (state.misc.clientId === state.game.black) {
      color = "black";
    } else if (state.misc.clientId === state.game.white) {
      color = "white";
    }
    //remove after testing
    return {
      game: state.game,
      misc: state.misc,
      color
    };
  }, (dispatch) => ({})
)(class Ingame extends React.Component {
  constructor(props) {
    super(props);
  }

  cellClick = (x, y) => {
    Network.dispatch(Actions.REQUEST_PLACE_STONE({ x, y }));
  }

  render() {

    let mainClass = "ingame";
    mainClass += this.props.color === this.props.game.turn ? " active" : "";
    mainClass += " " + this.props.color;

    return (
      <main className={mainClass}>
        <div className="wrapper">
          <div className="sidebar" onMouseEnter={() => {
            const sidebar = document.querySelector(".ingame .sidebar");

            if (sidebar.classList.contains("bottom")) {
              sidebar.classList.remove("bottom");
            } else {
              sidebar.classList.add("bottom");
            }
          }}>
            <div className="turn">
              <div className="playerTurn">Your Turn</div>

              <div className="enemyTurn">Opponent's Turn</div>
            </div>
            <div className="playerColor">Your color:&nbsp;<div>{this.props.color}</div></div>
          </div>
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
        </div>
      </main>
    );
  }
})