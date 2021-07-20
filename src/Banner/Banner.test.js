import { shallow } from "enzyme";
import Banner from './Banner';

describe('Banner', () => {
  let mountedBanner;

  beforeEach(() => {
    mountedBanner = shallow(<Banner />);
  });

  it('should mount without errors', () => { });

  it('should contain the logo image', () => {
    const image = mountedBanner.find('img');

    expect(image.length).toBe(1);
    console.log(image);
  });
});
