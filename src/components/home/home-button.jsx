import React from 'react'

import Icon from '../partials/icon.jsx'

export default class HomeButton extends React.PureComponent {
  render () {
    return (
      <div className='pt-content-card__body__icons__icon flex flex-dc flex-cross-center'>
        <Icon iconName={this.props.iconName} />
        <p>{this.props.iconTitle}</p>
      </div>
    )
  }
}
