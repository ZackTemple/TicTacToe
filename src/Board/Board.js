import { Component } from 'react';
import Square from '../Square/Square';
import './Board.css'

class Board extends Component {
  renderSquare(row, column) {
    return (
      <Square
        value={this.props.board[row][column]}
        onClick={() => this.props.onClick()(row, column)}
      />
    );
  }

  render() {
    return (
      <div className="Board">
        <div className="board-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
        </div>

        <div className="board-row">
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
        </div>

        <div className="board-row">
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
        </div>
      </div>
    );
  }
}

export default Board;
