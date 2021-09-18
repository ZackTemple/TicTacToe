export function originalGameState() {
  return {
    board: originalBoardState(),
    winner: null,
    currentPlayer: 'X',
    moveNumber: 0
  }
}

export function originalBoardState() {
  const board = Array(3).fill(null);

  return board.map(() => Array(3).fill(null));
}

export function isValidMove(board, row, column) {
  return board[row][column] === null;
}

export function getNextPlayer(currentPlayer) {
  return currentPlayer === 'X' ?
    'O' :
    'X';
}

export function getWinner(board, row, column, player) {
  const rowWinner = board[row].every(box => box === player);
  const columnWinner = board.every(row => row[column] === player);

  const rowColumnDifference = Math.abs(row - column);
  const isDiagonalPlacement = rowColumnDifference % (board.length - 1) === 0;

  let diagonalWinner = false;
  if (isDiagonalPlacement) {
    diagonalWinner = rowColumnDifference === 0 ?
      diagonalHasWinner(board, player, true) :
      diagonalHasWinner(board, player, false);
  }

  const hasWinner = rowWinner || columnWinner || diagonalWinner;
  return hasWinner ? player : null;
}

function diagonalHasWinner(board, player, checkDiagonalWithLikeIndices) {
  let j = checkDiagonalWithLikeIndices ? 0 : board.length - 1;

  for (let i = 0; i < board.length; i++) {
    if (board[i][j] !== player) {
      return false;
    }

    checkDiagonalWithLikeIndices ? j++ : j--;
  }

  return true;
}

export function boardIsFull(board, moveNumber) {
  return moveNumber === board.length ** 2;
}

export function makeMove(currentBoard, currentPlayer, row, column) {
  const squares = currentBoard.slice();
  squares[row][column] = currentPlayer;

  const winner = getWinner(squares, row, column, currentPlayer);
  const nextPlayer = getNextPlayer(currentPlayer)

  return [squares, nextPlayer, winner];
}

export function getFirstOpenSquare(board) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    let columnIndex = board[rowIndex].indexOf(null);
    if (columnIndex !== -1) return [rowIndex, columnIndex];
  }
}
