import React from 'react'

export default class Icon extends React.PureComponent {
  render () {
    let iconStyle = this.props.iconColor ? {
      fill: this.props.iconColor
    } : null

    return (
      <svg style={iconStyle} viewBox='0 0 24 24'><use xlinkHref={`${__BASE__}assets/icons.svg#${this.props.iconName}`} /></svg>
    )
  }
}
