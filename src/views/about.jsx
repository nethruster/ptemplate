import React from 'react';

import Nav from './../components/partials/nav.jsx';
import AboutBody from './../components/about/about-body.jsx';
import { profile } from '../config.js';

import lang from 'lang';

const langContext = lang.home;

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__about-container flex flex-dc">
        <Nav icon="account" title={langContext.about} />
        <AboutBody profile={profile}/>
      </div>
    );
  }
}
