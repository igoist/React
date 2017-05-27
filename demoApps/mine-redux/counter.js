import React, { Component } from 'react';

const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = counter(undefined, {});

    this.dispatch = this.dispatch.bind(this);
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    this.increment = () => {
      this.dispatch({ type: 'INCREMENT' });
    };

    this.decrement = () => {
      this.dispatch({ type: 'DECREMENT' });
    };
  }

  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }



  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
