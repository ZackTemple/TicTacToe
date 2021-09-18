import { Component } from "react";
import { boardIsFull } from '../Shared/constants';
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

  displayTie() {
    return (
      <div className="turn">
        Tie
      </div>
    );
  }

  render() {
    return (
      this.props.winner ?
        this.displayWinner() :
        boardIsFull(this.props.board, this.props.moveNumber) ?
          this.displayTie() :
          this.displayPlayerTurn()
    );
  }
}

export default GameInformation;
