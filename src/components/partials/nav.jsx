import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './icon.jsx';

export default class Nav extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__header pt-content-card__header--nav flex flex-cross-center">
        <Link to="/"><div className="pt-content-card__header--nav__back-icon flex flex-full-center">
          <Icon iconName="arrow-left" />
        </div>
        </Link>
        <div className="pt-content-card__header--nav__title flex flex-full-center">
          <Icon iconName={this.props.icon} />
          <h2 className="ta-c">{this.props.title}</h2>
        </div>
      </div>
    );
  }
}
