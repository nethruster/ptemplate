import React from 'react'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './async-component.jsx'

export default class ContentCard extends React.Component {
  render () {
    return (
      <div className='pt-content-card'>
        <Switch>
          <Route exact path='/' component={asyncComponent(() => import(/* webpackPrefetch: true, webpackChunkName: "home" */'../views/home.jsx').then(module => module.default))} />
          <Route exact path='/about' component={asyncComponent(() => import(/* webpackPrefetch: true, webpackChunkName: "about" */'../views/about.jsx').then(module => module.default))} />
          <Route exact path='/work' component={asyncComponent(() => import(/* webpackPrefetch: true, webpackChunkName: "work" */'../views/work.jsx').then(module => module.default))} />
          <Route exact path='/contact' component={asyncComponent(() => import(/* webpackPrefetch: true, webpackChunkName: "contact" */'../views/contact.jsx').then(module => module.default))} />
          <Route component={asyncComponent(() => import(/* webpackChunkName: "404" */'../views/404.jsx').then(module => module.default))} />
        </Switch>
      </div>
    )
  }
}
