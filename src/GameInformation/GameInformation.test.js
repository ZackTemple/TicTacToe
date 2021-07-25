import GameInformation from './GameInformation';
import {shallow} from 'enzyme';

describe('GameInformation', () => {
  let mountedGameInformation;

  beforeEach(() => {
    mountedGameInformation = shallow(<GameInformation />);
  });

  it('should render without errors', () => { });
});
