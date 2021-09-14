import { shallow } from "enzyme";
import { originalBoardState } from "../Shared/constants";
import Board from './Board';

describe('Board', () => {
  let mountedBoard;

  beforeEach(() => {
    const props = {
      board: originalBoardState()
    }
    mountedBoard = shallow(<Board {...props}/>);
  });

  it('should mount without errors', () => { });

  it('should contain exacty 9 Square components', () => {
    const squares = mountedBoard.find('Square');

    expect(squares.length).toBe(9);
  });
})
