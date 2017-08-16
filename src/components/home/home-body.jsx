import React from 'react';
import {Link} from 'react-router-dom';
 
import HomeButton from './home-button.jsx';
import Icon from '../partials/icon.jsx';

export default class HomeBody extends React.PureComponent {
  render () {
    const socialIcons = Object.keys(this.props.profile.social).map((e,i) => (
        <a key={i} className="pt-content-card__body__social-icons__icon" href={this.props.profile.social[e]} target="_blank">
            <Icon iconName={e} />
        </a>
    ))
    return (
        <div className="pt-content-card__body flex flex-dc flex-main-center">
            <div className="pt-content-card__body__icons flex flex-full-center flex-sa">
                <HomeButton iconTitle="About" iconName="account" />
                <Link to="/work"><HomeButton iconTitle="Work" iconName="folder" /></Link>
                <HomeButton iconTitle="Contact" iconName="message" />
            </div>
            <div className="pt-content-card__body__social-icons flex flex-full-center">
                {socialIcons}
            </div>
        </div>
    );
  }
}