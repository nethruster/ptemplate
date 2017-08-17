import React from 'react';

export default class Icon extends React.PureComponent {
  render() {
    const iconStyle = {
      fill: this.props.iconColor
    };

    return (
      <svg style={iconStyle} viewBox="0 0 24 24"><use xlinkHref={`assets/icons.svg#${this.props.iconName}`}></use></svg>
    );
  }
}
