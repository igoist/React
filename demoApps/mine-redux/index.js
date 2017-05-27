import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';

class App extends React.Component {

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
