// const counter = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { value: state.value + 1 };
//     case 'DECREMENT':
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from './actions/CounterActions';

class Counter extends Component {
  render() {
    console.log(this.props);
    const { value, actions } = this.props;
    // console.log(inc);
    // console.log(this.inc);

    return (
      <div>
        { value }
        <button onClick={() => actions.inc()}> + </button>
        <button onClick={() => actions.dec()}> - </button>
      </div>
    );
  }
}

function mapState(state) {
  return {
    value: state.value
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(Counter);

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = counter(undefined, {});
//
//     this.dispatch = this.dispatch.bind(this);
//     // this.increment = this.increment.bind(this);
//     // this.decrement = this.decrement.bind(this);
//     this.increment = () => {
//       this.dispatch({ type: 'INCREMENT' });
//     };
//
//     this.decrement = () => {
//       this.dispatch({ type: 'DECREMENT' });
//     };
//   }
//
//   dispatch(action) {
//     this.setState(prevState => counter(prevState, action));
//   }
//
//
//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

// export default Counter;
