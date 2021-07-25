import { Component } from "react";
import Board from '../Board/Board';
import GameInformation from "../GameInformation/GameInformation";
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <GameInformation />
        <Board />
        <button className="restart-button">Restart</button>
      </div>
    );
  }
}

export default Game;
