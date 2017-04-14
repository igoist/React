import React, { Component } from 'react';
import Checkbox from './src';

import 'zent/lib/index.css';

/*
## 不可用

不可用的 checkbox
*/

export default class Simple extends Component {

  render() {
    return (
      <div>
        <Checkbox disabled>
          Checkbox
        </Checkbox>
        <br />
        <Checkbox checked disabled>
          Checkbox
        </Checkbox>
      </div>
    );
  }
}
