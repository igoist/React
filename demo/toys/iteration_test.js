var Iteration = React.createClass({
  getInitialState() {
    return {
      array: [1, 2, 3, 4]
    }
  },

  render() {
    console.log(this.state.array);
    // 暂时先不考虑 error
    const x = this.state.array.map(function(value) {
      return (
        <span>{value}</span>
      )
    });
    console.log(x);
    return x[0];
  }
});

ReactDOM.render(
  <Iteration />,
  document.getElementById('example')
);
