import React from 'react'
import { render } from 'preact'
import { BrowserRouter } from 'react-router-dom'

import './assets-imports.js'

import ContentCard from './components/content-card.jsx'

if (module.hot) {
  require('preact/debug')
}

class App extends React.Component {
  render () {
    return (
      <BrowserRouter basename={__BASE__.slice(0, -1)}>
        <ContentCard />
      </BrowserRouter>
    )
  }
}

if (typeof Promise !== 'undefined' && Promise.toString().indexOf('[native code]') !== -1) {
  const root = document.getElementById('pt-app')
  if (root.hasChildNodes) {
    render(<App />, root, root.firstElementChild)
  } else {
    render(<App />, root)
  }
} else {
  window.alert('Please, use an updated browser like Google Chrome or Firefox if you want to use this website properly.')
  console.error('This browser doesn\'t support necessary web technology for this site to work, please, use an updated browser like Google Chrome or Firefox if you want to use this website properly.')
}

