import React from 'react';
import HomeHeader from '../components/home/home-header.jsx';
import HomeBody from '../components/home/home-body.jsx';

export default class Home extends React.PureComponent {
  render () {
    return (
        <div className="pt-content-card__home-container flex flex-dc">
            <HomeHeader />
            <HomeBody />
        </div>
    );
  }
}