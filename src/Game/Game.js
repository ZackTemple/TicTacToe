import { Component } from "react";
import Board from '../Board/Board';
import GameInformation from "../GameInformation/GameInformation";
import {
  originalGameState,
  isValidMove,
  placeMove,
  getFirstOpenSquare,
  getWinner
} from "../Shared/constants";
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = originalGameState();
  }

  canPlaceMove = (row, column) => isValidMove(this.state.board, row, column) && !this.state.winner;
  computerCanPlay = () => !this.state.winner && !this.state.humansTurn;

  handleMove(row, column) {
    if (this.canPlaceMove(row, column)) {
      const newBoard = placeMove(this.state.board, this.state.humansTurn, row, column);
      const winner = getWinner(newBoard, row, column, this.state.humansTurn);

      this.setState({
        board: newBoard,
        humansTurn: false,
        winner: winner,
        moveNumber: this.state.moveNumber + 1
      }, () => {
        if (this.computerCanPlay()) this.makeComputerMove();
      });
    }
  }

  makeComputerMove() {
    const [row, column] = getFirstOpenSquare(this.state.board);
    const newBoard = placeMove(this.state.board, this.state.humansTurn, row, column);
    const winner = getWinner(newBoard, row, column, this.state.humansTurn);

    this.setState({
      board: newBoard,
      humansTurn: true,
      winner: winner,
      moveNumber: this.state.moveNumber + 1
    });
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
