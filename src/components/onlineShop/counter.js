import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  resetCounter,
  setCounter,
} from "../redux/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>My Counter</h1>
        <input type="text" value={this.props.counter}></input>
        <div>
          <button
            onClick={() => {
              this.props.increment();
            }}
            type="button"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.decrement();
            }}
            type="button"
          >
            -
          </button>
          <button
            onClick={() => {
              this.props.resetCounter();
            }}
            type="button"
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, { increment, decrement, resetCounter })(
  Counter
);
