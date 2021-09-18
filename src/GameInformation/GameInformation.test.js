import GameInformation from './GameInformation';
import { shallow } from 'enzyme';
import { originalBoardState } from '../Shared/constants'

describe('GameInformation', () => {
  let mountedGameInformation;

  beforeEach(() => {
    const props = {
      board: originalBoardState()
    }
    mountedGameInformation = shallow(<GameInformation {...props}/>);
  });

  it('should render without errors', () => { });
});
