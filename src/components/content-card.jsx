import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './../views/home.jsx';

export default class ContentCard extends React.PureComponent {
  render () {
    return (
      <div className="pt-content-card">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}