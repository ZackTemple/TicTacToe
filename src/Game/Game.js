import { Component } from "react";
import Board from '../Board/Board';
import GameInformation from "../GameInformation/GameInformation";
import {
  originalGameState,
  isValidMove,
  makeMove,
  getFirstOpenSquare
} from "../Shared/constants";
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = originalGameState();
  }

  computerCanPlay = () => !this.state.winner && this.state.currentPlayer === 'O';

  handleMove(row, column) {
    if (isValidMove(this.state.board, row, column) && !this.state.winner) {
      let [newBoard, nextPlayer, winner] = makeMove(this.state.board, this.state.currentPlayer, row, column);

      this.setState({
        squares: newBoard,
        currentPlayer: nextPlayer,
        winner: winner,
        moveNumber: this.state.moveNumber + 1
      }, () => {
        if (this.computerCanPlay()) this.makeComputerMove();
      });
    }
  }

  makeComputerMove() {
    let [row, column] = getFirstOpenSquare(this.state.board);
    this.handleMove(row, column);
  }

  setNewBoardState(squares, nextPlayer, winner, updatedMoveNumber) {
    this.setState({
      squares: squares,
      currentPlayer: nextPlayer,
      winner: winner,
      moveNumber: updatedMoveNumber
    });
  };

  restartGame() {
    this.setState(originalGameState());
  }

  render() {
    return (
      <div className="Game">
        <GameInformation {...this.state}/>
        <Board {...this.state} onClick={() => this.handleMove.bind(this)}/>
        <button className="restart-button" onClick={() => this.restartGame()}>Restart</button>
      </div>
    );
  }
}

export default Game;
