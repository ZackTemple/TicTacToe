import { Component } from "react";
import logo from './tictactoe.png';

class Banner extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="logo" alt="home-logo"></img>
        <header>
          Coming soon!
        </header>
      </div>
    );
  }
}

export default Banner;
