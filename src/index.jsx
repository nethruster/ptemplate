import React from 'react';
import {render} from 'react-dom';

require('./scss/index.scss');

class App extends React.Component {
  render () {
    return (
      <p>ptemplate</p>
    );
  }
}

render(<App/>, document.getElementById('app'));