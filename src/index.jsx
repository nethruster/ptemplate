import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

require('./scss/index.scss');

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
