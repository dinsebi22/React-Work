import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCentered: props.isCentered ? "boxShadow center" : "boxShadow",
    };
  }

  render() {
    return <div className={this.state.isCentered}>{this.props.children}</div>;
  }
}

export default Card;
