import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let mountedApp;

  beforeEach(() => {
    mountedApp = shallow(<App />);
  });

  it('should render without errors', () => {
  });

  it('should render a Banner component', () => {
    const games = mountedApp.find('Banner');

    expect(games.length).toBe(1);
  });

  it('should render a Game component', () => {
    const games = mountedApp.find('Game');

    expect(games.length).toBe(1);
  });
});
