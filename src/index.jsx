import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './assets-imports.js'

import ContentCard from './components/content-card.jsx'

if (module.hot) {
  require('preact/debug')
}

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <ContentCard />
      </BrowserRouter>
    )
  }
}

if (typeof Promise !== 'undefined' && Promise.toString().indexOf('[native code]') !== -1) {
  render(<App />, document.getElementById('pt-app'))
} else {
  window.alert('Please, use an updated browser like Google Chrome or Firefox if you want to use this website properly.')
  console.error('This browser doesn\'t support necessary web technology for this site to work, please, use an updated browser like Google Chrome or Firefox if you want to use this website properly.')
}
