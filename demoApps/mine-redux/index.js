import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './counter';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <div>
          <Counter />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
