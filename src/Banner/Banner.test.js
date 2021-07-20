import { shallow } from "enzyme";
import Banner from './Banner';
import logo from '../../public/images/tictactoe.png';

describe('Banner', () => {
  let mountedBanner;
  let image;

  beforeEach(() => {
    mountedBanner = shallow(<Banner />);
    image = mountedBanner.find('img');
  });

  it('should mount without errors', () => { });

  it('should contain the logo image', () => {
    expect(image.length).toBe(1);
  });

  it('should contain the logo image with the src property as the given png', () => {
    const imageSrc = image.prop('src');

    expect(imageSrc).toEqual(logo);
  });
});
