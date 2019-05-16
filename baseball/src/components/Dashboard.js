import React from "react";
import Display from "./Display";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0
    };
  }

  onStrike = () => {
    if (this.state.strikes === 3) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  onBall = () => {
    if (this.state.balls === 4) {
      this.setState({
        strikes: 0,
        balls: 0
      });
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  onHit = () => {
    this.setState({
      strikes: 0,
      balls: 0
    });
  };

  onFoul = () => {
    if (this.state.strikes === 2) {
      this.setState({
        strikes: this.state.strikes
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Display</h1>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <h1>Dashboard</h1>
        <button onClick={this.onBall}>Ball</button>
        <button onClick={this.onStrike}>Strike</button>
        <button onClick={this.onFoul}>Foul</button>
        <button onClick={this.onHit}>Hit</button>
      </div>
    );
  }
}
export default Dashboard;
