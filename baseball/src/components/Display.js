import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>
        <p>Balls: {this.props.balls}</p>
        <p>Strikes: {this.props.strikes}</p>
      </div>
    );
  }
}
export default Display;
