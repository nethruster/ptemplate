import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/home.jsx';
import About from '../views/about.jsx';
import Work from '../views/work.jsx';
import Contact from '../views/contact.jsx';

export default class ContentCard extends React.Component {
  render() {
    return (
      <div className="pt-content-card">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}
