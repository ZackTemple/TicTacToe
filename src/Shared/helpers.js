export function originalGameState() {
  return {
    board: originalBoardState(),
    winner: null,
    humansTurn: true,
    moveNumber: 0,
    gameMode: GameMode.Easy
  }
}

export function originalBoardState() {
  const board = Array(3).fill(null);

  return board.map(() => Array(3).fill(null));
}

export function isValidMove(board, row, column) {
  return board[row][column] === null;
}

export function getWinner(board, row, column, humansTurn) {
  const player = humansTurn ? 'X' : 'O';
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

export function placeMove(currentBoard, humansTurn, row, column) {
  const newBoard = currentBoard.slice();
  newBoard[row][column] = humansTurn ? Pieces.Human : Pieces.Computer;

  return newBoard;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomSquare(board) {
  let availableSquares = [];

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    let columnIndex = board[rowIndex].indexOf(null);
    if (columnIndex !== -1) availableSquares.push([rowIndex, columnIndex]);
  }
  const randomIndex = getRandomInt(availableSquares.length);

  return availableSquares[randomIndex];
}

export function getSmartSquare(board, currentMoveNumber) {
  let bestScore = -Infinity;
  let bestMove;

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length; column++) {
      // Check if the square is available. If so, run minimax
      if (!board[row][column]) {
        board[row][column] = Pieces.Computer;
        let score = minimax(board, [row, column], currentMoveNumber + 1, false);
        board[row][column] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = [row, column];
        }
      }
    }
  }

  return bestMove;
}

function getScoreByDepth(result, depth) {
  // If human wins, minimize score
  // If computer wins, maximize score
  // If tie, return 0;
  return result === Pieces.Human ?
    scores[Pieces.Human] - depth :
    result === Pieces.Computer ?
    scores[Pieces.Computer] + depth :
    scores['Tie'];
}

function minimax(board, moves, depth, isMaximizing) {
  const [newRow, newColumn] = moves;
  let result = getWinner(board, newRow, newColumn, isMaximizing);

  if (result || depth === board.length ** 2) {
    return getScoreByDepth(result, depth);
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        // Check if the square is available. If so, recurse
        if (!board[row][column]) {
          board[row][column] = Pieces.Computer;
          let score = minimax(board, [row, column], depth + 1, false);
          board[row][column] = null;
          bestScore = Math.max(bestScore, score)
        }
      }
    }

    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        // Check if the square is available. If so, recurse
        if (!board[row][column]) {
          board[row][column] = Pieces.Human;
          let score = minimax(board, [row, column], depth + 1, true);
          board[row][column] = null;
          bestScore = Math.min(bestScore, score)
        }
      }
    }

    return bestScore;
  }
}

const scores = {
  X: 1,
  O: -1,
  Tie: 0
}

export const Pieces =  {
  Human: 'X',
  Computer: 'O'
}

export const GameMode = {
  Easy: 'Easy',
  Hard: 'Hard'
}
