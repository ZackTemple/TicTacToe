import { shallow } from "enzyme";
import Board from './Board';

describe('Board', () => {
  let mountedBoard;

  beforeEach(() => {
    mountedBoard = shallow(<Board />);
  });

  it('should mount without errors', () => { });

  it('should contain exacty 9 Square components', () => {
    const squares = mountedBoard.find('Square');

    expect(squares.length).toBe(9);
  });
})
