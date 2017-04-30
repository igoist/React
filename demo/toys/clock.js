console.log("Here!!");

// console.log(React.Component);

// function Clock(props) {
//   return (<div>
//       <h1>Hello World!</h1>
//       <h2>It is {props.date.toLocaleTimeString()} !</h2>
//     </div>)
// }


// function tick() {
//   ReactDOM.render(
//     <Clock date = {new Date()} />,
//     document.getElementById('example3')
//   );
// }
// setInterval(tick, 1000);

// Converting a Function to a Class
// You can convert a functional component like Clock to a class in five steps:
//
// Create an ES6 class with the same name that extends React.Component.
//
// Add a single empty method to it called render().
//
// Move the body of the function into the render() method.
//
// Replace props with this.props in the render() body.
//
// Delete the remaining empty function declaration. The above

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), counter: 3};
    // this.state.counter = 0;
    console.log("this.props: " + this.props);
    console.log("props: " + props);
    console.log("props.inc: " + props.inc);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      date: new Date(),
      counter: prevState.counter + props.inc
    }));
    // another way
    // this.setState(function(prevState, props) {
    //   console.log("prevState: " + prevState);
    //   console.log("props: " + props);
    //   return {
    //     date: new Date(),
    //     counter: prevState.counter + props.inc
    //   }
    // });

  }

  handleClick(e) {
    console.log(e.target.value);
    this.setState({counter: 0});
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2 onClick={this.handleClick}>{this.state.counter}: It is {this.state.date.toLocaleTimeString()} !</h2>
      </div>
    );
  }
}

// <FormattedDate date={this.state.date} />
function FormattedDate(props) {
  return (<h2>: It is {props.date.toLocaleTimeString()} !</h2>);
}



ReactDOM.render(
  (<div>
    <Clock inc={1} />
    <Clock inc={2} />
    <Clock inc={3} />
  </div>),
  document.getElementById('example3')
);
