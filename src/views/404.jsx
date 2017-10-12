import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../components/partials/icon.jsx';

import lang from 'lang';

const langContext = lang["404"];

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__404-container flex flex-dc">
        <div className="pt-content-card__body pt-content-card__body__404 flex flex-dc flex-full-center">
          <Icon iconName="clippy" />
          <p>{langContext.text}</p>
          <Link to="/" title={langContext.back_404}><div>{langContext.button_text}</div></Link>
        </div>
      </div>
    );
  }
}
