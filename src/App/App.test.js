import { render, screen } from '@testing-library/react';
import App from './index.js';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should contain the home image for tic-tac-toe', () => {
    const image = screen.getByAltText('home-logo');

    expect(image).toHaveAttribute('src', 'tictactoe.png');
  });

  it('should contain text', () => {
    const text = screen.getByText('Coming soon!');

    expect(text).toBeInTheDocument();
  });
});
