import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="balls">Balls: {this.props.balls}</p>
        <p>Strikes: {this.props.strikes}</p>
      </div>
    );
  }
}
export default Display;
