import React, { Component, Fragment } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one" };
  }
  //this syntax automatically binds roll to instance
  roll = () => {
    // pick 2 new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    // set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2 });
  };

  render() {
    return (
      <Fragment className="RollDice">
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </Fragment>
    );
  }
}

export default RollDice;
