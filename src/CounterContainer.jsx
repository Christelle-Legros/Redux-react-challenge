import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  count: state,
});

const CounterComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>

    <button
      id="button-increment"
      onClick={() => dispatch({ type: "INCREMENT" })}
    >
      Increment
    </button>
    <button
      id="button-decrement"
      onClick={() => dispatch({ type: "DECREMENT" })}
    >
      Decrement
    </button>
    <button
      id="button-incrementTen"
      onClick={() => dispatch({ type: "INCREMENT_TEN" })}
    >
      Increment by 10
    </button>
    <button
      id="button-decrementTen"
      onClick={() => dispatch({ type: "DECREMENT_TEN" })}
    >
      Decrement by 10
    </button>
    <button id="button-reset" onClick={() => dispatch({ type: "RESET" })}>
      Reset
    </button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
