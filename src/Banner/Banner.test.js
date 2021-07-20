import { shallow } from "enzyme";
import Banner from './Banner';

describe('Banner', () => {
  it('should mount without errors', () => {
    let mountedBanner = shallow(<Banner />);
  });
});
