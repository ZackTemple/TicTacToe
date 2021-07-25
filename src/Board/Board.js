import { Component } from "react";
import Square from '../Square/Square';
import './Board.css'

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default Board;
