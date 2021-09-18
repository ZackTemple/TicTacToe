import { Component } from "react";
import Board from '../Board/Board';
import GameInformation from "../GameInformation/GameInformation";
import {
  originalGameState,
  isValidMove,
  placeMove,
  getRandomSquare,
  getWinner,
  boardIsFull,
  getSmartSquare,
  GameMode
} from "../Shared/constants";
import './Game.css';
import Button from 'react-bootstrap/Button';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = originalGameState();
  }

  canPlaceMove = (row, column) => isValidMove(this.state.board, row, column) && !this.state.winner;
  computerCanPlay = () => !this.state.winner && !this.state.humansTurn && !boardIsFull(this.state.board, this.state.moveNumber);

  handleMove(row, column) {
    if (this.canPlaceMove(row, column)) {
      const newBoard = placeMove(this.state.board, this.state.humansTurn, row, column);
      const winner = getWinner(newBoard, row, column, this.state.humansTurn);

      this.setNewState(newBoard, false, winner)
    }
  }

  makeComputerMove() {
    const [row, column] = this.state.gameMode === GameMode.Easy ?
      getRandomSquare(this.state.board, this.state.moveNumber) :
      getSmartSquare(this.state.board, this.state.moveNumber);
    const newBoard = placeMove(this.state.board, this.state.humansTurn, row, column);
    const winner = getWinner(newBoard, row, column, this.state.humansTurn);

    this.setNewState(newBoard, true, winner);
  }

  setNewState(newBoard, humansTurn, winner) {
    this.setState({
      board: newBoard,
      humansTurn,
      winner,
      moveNumber: this.state.moveNumber + 1
    }, () => {
      if (this.computerCanPlay()) this.makeComputerMove();
    });
  }

  restartGame() {
    this.setState(originalGameState());
  }

  switchGameMode() {
    const newGameMode = this.state.gameMode === GameMode.Easy ? GameMode.Hard : GameMode.Easy;
    this.setState({gameMode: newGameMode});
  }

  render() {
    return (
      <div className="Game">
        <GameInformation {...this.state} onClick={() => this.switchGameMode()}/>
        <Board {...this.state} onClick={() => this.handleMove.bind(this)}/>
        <Button className="btn btn-light restart-button" onClick={() => this.restartGame()}>Restart</Button>
      </div>
    );
  }
}

export default Game;
