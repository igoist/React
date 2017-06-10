class Counter extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };

    this.increment = () => {
      this.setState(prevState => ({
        value: prevState.value + 1
      }));
    };

    this.decrement = () => {
      this.setState(prevState => ({
        value: prevState.value - 1
      }));
    };
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('example2')
);
