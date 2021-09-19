import { Component } from "react";
import { boardIsFull, Pieces, GameMode } from '../Shared/constants';
import './GameInformation.css';

class GameInformation extends Component {
  gameModeIsEasy = () => this.props.gameMode === GameMode.Easy;

  gameModeSetting() {
    return (
      <form className="game-mode-buttons game-info">
        <div className="game-info-text">Game Mode:</div>
        <input type="radio" id="easy" name="fav_language" value="Easy" defaultChecked onChange={this.props.onChange}></input>
        <label for="easy" className="game-mode-label">Easy</label>
        <input type="radio" id="hard" name="fav_language" value="Hard" onChange={this.props.onChange}></input>
        <label for="hard" className="game-mode-label">Hard</label>
      </form>
    );
  }

  displayPlayerTurn() {
    return (
      <div className="turn game-info">
        Turn: {this.props.humansTurn ? Pieces.Human : Pieces.Computer}
      </div>
    );
  }

  displayWinner() {
    return (
      <div className="turn game-info">
        Winner: {this.props.winner}
      </div>
    );
  }

  displayTie() {
    return (
      <div className="turn game-info">
        Tie
      </div>
    );
  }

  userMessage() {
    return this.props.winner ?
      this.displayWinner() :
      boardIsFull(this.props.board, this.props.moveNumber) ?
        this.displayTie() :
        this.displayPlayerTurn()
  }

  render() {
    return (
      this.props.moveNumber === 0 ? this.gameModeSetting() : this.userMessage()
    );
  }
}

export default GameInformation;
