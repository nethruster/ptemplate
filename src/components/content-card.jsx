import React from 'react';

import Home from './../views/home.jsx';

export default class ContentCard extends React.PureComponent {
  render () {
    return (
      <div className="pt-content-card">
        <Home />
      </div>
    );
  }
}