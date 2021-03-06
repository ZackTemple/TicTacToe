import { shallow } from "enzyme";
import Game from './Game';

describe('Game', () => {
  let mountedGame;

  beforeEach(() => {
    mountedGame = shallow(<Game />);
  });

  it('should render without errors', () => { });

  it('should render a Board component', () => {
    const board = mountedGame.find('Board');

    expect(board.length).toBe(1);
  });

  it('should render a GameInformation component', () => {
    const gameInfo = mountedGame.find('GameInformation');

    expect(gameInfo.length).toBe(1);
  })
});

