import React from 'react';
import HomeHeader from '../components/home/home-header.jsx';
import HomeBody from '../components/home/home-body.jsx';

import { profile } from '../config.js';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__home-container pt-content-card__home-container--home flex flex-dc">
        <HomeHeader profile={profile} />
        <HomeBody profile={profile} />
      </div>
    );
  }
}
