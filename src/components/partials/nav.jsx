import React from 'react';

import Icon from './icon.jsx'

export default class Nav extends React.PureComponent {
  render () {
    return (
        <div className="pt-content-card__header pt-content-card__header--nav flex flex-cross-center">
            <div className="pt-content-card__header--nav__back-icon flex flex-full-center">
              <Icon iconName="arrow-left" />
            </div>
            <div className="pt-content-card__header--nav__title flex flex-full-center">
              <Icon iconName={this.props.icon} />
              <h2 className="ta-c">{this.props.title}</h2>
            </div>
        </div>
    );
  }
}