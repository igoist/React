import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import DAlert from './demo/DAlert';
// import DBreadcrumb from './demo/DBreadcrumb';
// import DButton from './demo/DButton';
// import Simple from './demo/checkbox/readonly';
// import Simple from './demo/datetimepicker/examples/datePicker';
// import Simple from './demo/datetimepicker/examples/monthPicker';
import Simple from './demo/datetimepicker/examples/rangePicker';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Simple />
      </div>
    );
  }
}

export default App;
