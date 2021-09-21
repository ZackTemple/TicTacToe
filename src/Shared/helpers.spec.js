import {
  GameMode,
  getWinner,
  isValidMove,
  originalBoardState,
  originalGameState,
  Pieces
} from "./helpers";
import * as faker from 'faker';

describe('originalGameState', () => {
  it('should return an object with the default Game state', () => {
    const expectedGameState = {
      board: originalBoardState(),
      winner: null,
      humansTurn: true,
      moveNumber: 0,
      gameMode: GameMode.Easy
    }

    const gameState = originalGameState();

    expect(gameState).toEqual(expectedGameState);
  });
});

describe('originalBoardState', () => {
  it('should return an empty 3x3 array', () => {
    const expectedBoardState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    const boardState = originalBoardState();

    expect(boardState).toEqual(expectedBoardState);
  });
});

describe('isValidMove', () => {
  it('should return true if the given (row, column) coordinate is null', () => {
    const emptyBoard = originalBoardState();
    const randomRow = faker.datatype.number(emptyBoard.length - 1);
    const randomColumn = faker.datatype.number(emptyBoard.length - 1);

    const validMove = isValidMove(emptyBoard, randomRow, randomColumn);

    expect(validMove).toBe(true);
  });

  it('should return false if the given (row, column) coordinate is already taken', () => {
    const emptyBoard = originalBoardState();
    const randomRow = faker.datatype.number(emptyBoard.length - 1);
    const randomColumn = faker.datatype.number(emptyBoard.length - 1);
    emptyBoard[randomRow][randomColumn] = Pieces.Human;

    const validMove = isValidMove(emptyBoard, randomRow, randomColumn);

    expect(validMove).toBe(false);
  });
});

describe('getWinner', () => {
  describe('if there is a winner', () => {
    it('should return the winning player if the player who made the last move won by any row', () => {
      const expectedBoardState = [
        ['O', null, 'O'],
        ['X', 'X', 'X'],
        ['O', null, null]
      ];
      const lastMove = [1, 0];
      const [row, column] = lastMove;
      const player = 'X'; // human's turn

      expect(getWinner(expectedBoardState, row, column, true)).toBe(player);
    });

    it('should return the winning player if the given player`s last move won by any column', () => {
      const expectedBoardState = [
        ['X', 'O', null],
        ['X', 'O', 'X'],
        ['O', 'O', null]
      ];
      const lastMove = [1, 1];
      const [row, column] = lastMove;
      const player = 'O'; // not human's turn

      expect(getWinner(expectedBoardState, row, column, false)).toBe(player);
    });

    it('should return the winning player if the given player`s last move won by the top-left-to-bottom-right diagonal', () => {
      const expectedBoardState = [
        ['X', 'O', null],
        ['O', 'X', 'X'],
        [null, 'O', 'X']
      ];
      const lastMove = [1, 1];
      const [row, column] = lastMove;
      const player = 'X'; // human's turn

      expect(getWinner(expectedBoardState, row, column, true)).toBe(player);
    });

    it('should return the winning player if the given player`s last move won by the bottom-left-to-top-right diagonal', () => {
      const expectedBoardState = [
        ['X', 'X', 'O'],
        ['O', 'O', 'X'],
        ['O', 'X', 'X']
      ];
      const lastMove = [1, 1];
      const [row, column] = lastMove;
      const player = 'O'; // human's turn

      expect(getWinner(expectedBoardState, row, column, false)).toBe(player);
    });
  });

  it('should return null if the given player`s last move did not make them a winner (even if the board HAS a winner on it)', () => {
    const expectedBoardState = [
      ['X', 'O', 'O'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O']
    ];
    const lastMove = [0, 0];
    const [row, column] = lastMove;

    // send in true for humansTurn since X is at (0, 0)
    expect(getWinner(expectedBoardState, row, column, true)).toBe(null);
  });
});
