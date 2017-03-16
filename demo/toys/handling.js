function ActionLink() {
  function handleClick(e) {
    console.log(e);
    e.preventDefault();
    console.log("actionLink!");
  }

  return (
    <a href="####" onClick={handleClick}>
      Click Here!
    </a>
  );
}




class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    // console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

ReactDOM.render(
  // <ActionLink />,
  <Toggle />,
  document.getElementById('example2')
);
