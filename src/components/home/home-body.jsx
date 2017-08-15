import React from 'react';

import HomeButton from './home-button.jsx';
import Icon from '../partials/icon.jsx';

export default class Home extends React.PureComponent {
  render () {
    return (
        <div className="pt-content-card__body flex flex-dc flex-main-center">
            <div className="pt-content-card__body__icons flex flex-full-center flex-sa">
                <HomeButton iconTitle="About" iconName="account" />
                <HomeButton iconTitle="Work" iconName="folder" />
                <HomeButton iconTitle="Contact" iconName="message" />
            </div>
            <div className="pt-content-card__body__social-icons flex flex-full-center">
                <div className="pt-content-card__body__social-icons__icon">
                    <Icon iconName="twitter" />
                </div>
                <div className="pt-content-card__body__social-icons__icon">
                    <Icon iconName="telegram" />
                </div>
                <div className="pt-content-card__body__social-icons__icon">
                    <Icon iconName="github" />
                </div>
            </div>
        </div>
    );
  }
}