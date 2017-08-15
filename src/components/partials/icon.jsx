import React from 'react';

export default class Icon extends React.PureComponent {
  render () {
    return (
        <svg viewBox="0 0 24 24"><use xlinkHref={`assets/icons.svg#${this.props.iconName}`}></use></svg>
    );
  }
}