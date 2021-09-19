import { GameMode, isValidMove, originalBoardState, originalGameState, Pieces } from "./helpers";
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
    ]

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
