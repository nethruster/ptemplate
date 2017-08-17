import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../views/home.jsx';
import Work from './../views/work.jsx';

export default class ContentCard extends React.Component {
  render() {
    return (
      <div className="pt-content-card">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/work' component={Work} />
        </Switch>
      </div>
    );
  }
}
