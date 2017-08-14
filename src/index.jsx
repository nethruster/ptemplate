import React from 'react';
import {render} from 'react-dom';

require('./scss/index.scss');

import ContentCard from './components/content-card.jsx';

class App extends React.Component {
  render () {
    return (
      <ContentCard />
    );
  }
}

render(<App/>, document.getElementById('pt-app'));