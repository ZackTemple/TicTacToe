import { shallow } from "enzyme";
import Square from './Square';

describe('Square', () => {
  it('should render without errors', () => {
    let mountedSquare = shallow(<Square />);
  });
})
