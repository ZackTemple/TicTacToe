import { Component } from "react";
import { boardIsFull, Pieces, GameMode } from '../Shared/helpers';
import './GameInformation.css';

class GameInformation extends Component {
  gameModeIsEasy = () => this.props.gameMode === GameMode.Easy;
  gameModeIsMedium = () => this.props.gameMode === GameMode.Medium;
  gameModeIsHard = () => this.props.gameMode === GameMode.Hard;

  gameModeSetting() {
    return (
      <form className="game-mode-buttons game-info">
        <div className="game-info-text">Game Mode</div>
        <input
          type="radio"
          id="easy"
          name="fav_language"
          value="Easy"
          checked={this.gameModeIsEasy()}
          onChange={this.props.onChange}>
        </input>
        <label htmlFor="easy" className="game-mode-label">Easy</label>
        {'\u00A0'} {/* Needed to add due to html forms not giving space */}
        <input
          type="radio"
          id="medium"
          name="fav_language"
          value="Medium"
          checked={this.gameModeIsMedium()}
          onChange={this.props.onChange}>
        </input>
        <label htmlFor="medium" className="game-mode-label">Medium</label>
        <input
          type="radio"
          id="hard"
          name="fav_language"
          value="Hard"
          checked={this.gameModeIsHard()}
          onChange={this.props.onChange}>
        </input>
        <label htmlFor="hard" className="game-mode-label">Hard</label>
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
