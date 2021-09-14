import { Component } from "react";
import Board from '../Board/Board';
import GameInformation from "../GameInformation/GameInformation";
import {
  getNextPlayer,
  getWinner,
  originalGameState,
  isValidMove
} from "../Shared/constants";
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = originalGameState();
  }

  handleMove(row, column) {
    if (isValidMove(this.state.board, row, column) && !this.state.winner) {
      const squares = this.state.board.slice();
      squares[row][column] = this.state.currentPlayer;

      const winner = getWinner(squares, row, column, this.state.currentPlayer);
      const nextPlayer = getNextPlayer(this.state.currentPlayer)

      this.setState({
        squares: squares,
        currentPlayer: nextPlayer,
        winner: winner
      });
    }
  }

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
