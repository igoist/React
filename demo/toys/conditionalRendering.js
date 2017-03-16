function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return UserGreeting(props);
  } else {
    return GuestGreeting(props);
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
    // console.log(this.state.isLoggedIn);
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    // console.log(this.state.isLoggedIn);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      // Can you find out the difference between CLick & Click : )
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    // console.log(button);

    // true && expression always evaluates to expression, and false && expression always evaluates to false.

    // Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
    return (
      <div>
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if (props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}




ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
