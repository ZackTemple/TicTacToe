import { Component } from "react";
import { boardIsFull, Pieces, GameMode } from '../Shared/constants';
import './GameInformation.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class GameInformation extends Component {
  gameModeIsEasy = () => this.props.gameMode === GameMode.Easy;

  displayPlayerTurn() {
    return (
      <div className="turn">
        Turn: {this.props.humansTurn ? Pieces.Human : Pieces.Computer}
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

  userMessage() {
    return this.props.winner ?
      this.displayWinner() :
      boardIsFull(this.props.board, this.props.moveNumber) ?
        this.displayTie() :
        this.displayPlayerTurn()
  }

  render() {
    return (
      <div>
        {this.userMessage()}
        {/* <button className='gameMode'>{this.gameModeIsEasy() ? 'Hard' : 'Easy'}</button> */}
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Easy</Button>
          <Button variant="secondary">Hard</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default GameInformation;
