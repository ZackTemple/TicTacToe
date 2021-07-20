import { Component } from "react";
import Square from '../Square/Square';

class Board extends Component {
  render() {
    return (
      <div>
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
