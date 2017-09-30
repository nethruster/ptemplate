import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../components/partials/icon.jsx';

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__404-container flex flex-dc">
        <div className="pt-content-card__body pt-content-card__body__404 flex flex-dc flex-full-center">
          <Icon iconName="clippy" />
          <p>Sorry, I can't find the page you're looking for...</p>
          <Link to="/" title="Go home"><div>Do you want help to return home?</div></Link>
        </div>
      </div>
    );
  }
}
