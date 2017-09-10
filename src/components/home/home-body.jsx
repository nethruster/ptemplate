import React from 'react';
import { Link } from 'react-router-dom';

import HomeButton from './home-button.jsx';
import Icon from '../partials/icon.jsx';

export default class HomeBody extends React.PureComponent {
  render() {
    const socialIcons = this.props.profile.social.map((element, i) => (
      <a key={i} className="pt-content-card__body__social-icons__icon" href={element.url} target="_blank" title={element.text}>
        <Icon iconName={element.iconName} iconColor={element.hoverColor} />
      </a>
    ));

    return (
      <div className="pt-content-card__body flex flex-dc flex-main-center">
        <div className="pt-content-card__body__icons flex flex-full-center flex-sa">
          <Link to="/about" title="About me"><HomeButton iconTitle="About" iconName="account" /></Link>
          <Link to="/work" title="My Work"><HomeButton iconTitle="Work" iconName="folder" /></Link>
          <Link to="/contact" title="Contact me"><HomeButton iconTitle="Contact" iconName="message" /></Link>
        </div>
        {
          this.props.profile.social.length > 0 &&
          <div className="pt-content-card__body__social-icons flex flex-full-center">
            {socialIcons}
          </div>
        }
      </div>
    );
  }
}
