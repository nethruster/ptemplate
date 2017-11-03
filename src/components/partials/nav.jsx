import React from 'react'
import { Link } from 'react-router-dom'

import Icon from './icon.jsx'

import lang from 'lang'

const langContext = lang.misc

export default class Nav extends React.PureComponent {
  render () {
    return (
      <div className='pt-content-card__header pt-content-card__header--nav flex flex-cross-center'>
        <Link to='/' title={langContext.back}><div className='pt-content-card__header--nav__icon flex flex-full-center'>
          <Icon iconName='arrow-left' />
        </div>
        </Link>
        <div className='pt-content-card__header--nav__title flex flex-full-center'>
          <Icon iconName={this.props.icon} />
          <h2 className='ta-c'>{this.props.title}</h2>
        </div>
        {
          this.props.handleDrawerState
          ? <button style={{pointerEvents: this.props.isFiltersOpen ? 'none' : ''}} className='pt-content-card__header--nav__icon flex-full-center pointer' onClick={this.props.handleDrawerState} >
            <Icon iconName='filter' />
          </button> : null
        }
      </div>
    )
  }
}
