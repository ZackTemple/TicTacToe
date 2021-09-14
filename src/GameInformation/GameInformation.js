import { Component } from "react";
import './GameInformation.css';

class GameInformation extends Component {
  displayPlayerTurn() {
    return (
      <div className="turn">
        Turn: {this.props.currentPlayer}
      </div>
    );
  }

  displayWinner() {
    return (
      <div className="turn">
        Winner: {this.props.winner}
      </div>
    );
  }

  render() {
    return (
      this.props.winner ?
      this.displayWinner() :
        this.displayPlayerTurn()
    );
  }
}

export default GameInformation;
