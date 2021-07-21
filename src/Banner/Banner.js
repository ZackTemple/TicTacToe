import './Banner.css';
import { Component } from "react";
import logo from './tictactoe.png';

class Banner extends Component {
  render() {
    return <img src={logo} className="logo" alt="home-logo"></img>;
  }
}

export default Banner;
