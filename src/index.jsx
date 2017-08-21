import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

require('./scss/index.scss');
require('./assets/icons.svg');
require('./assets/avatar.svg');

import ContentCard from './components/content-card.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ContentCard />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('pt-app'));
