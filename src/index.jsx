import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {profile} from './config.js';
import './assets-imports.js';

import ContentCard from './components/content-card.jsx';

if (module.hot) {
  require('preact/debug');
}

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
