import { shallow } from "enzyme";
import Square from './Square';

describe('Square', () => {
  let mountedSquare;

  beforeEach(() => {
    mountedSquare = shallow(<Square />);
  });

  it('should render without errors', () => { });

  it('should contain a button', () => {
    const button = mountedSquare.find('button');

    expect(button.length).toBe(1);
  });
})
