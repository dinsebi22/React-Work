import React, { Component } from "react";
import "./Box.css";
import Card from "./UI/Card";

class Box extends Component {
  check = (index) => () => {
    if (!this.props.value) {
      if (this.props.turn % 2 === 0) {
        this.props.doTurn({ index: index, value: "X" });
      } else {
        this.props.doTurn({ index: index, value: "O" });
      }
      this.props.checkBoard();
    }
  };

  render() {
    return (
      <div className="outerBox" onClick={this.check(this.props.index)}>
        <Card>
          <div className="innerBox">
            <span>{this.props.value}</span>
          </div>
        </Card>
      </div>
    );
  }
}

export default Box;
