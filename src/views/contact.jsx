import React from 'react';

import Nav from '../components/partials/nav.jsx';
import ContactBody from '../components/contact/contact-body.jsx';

import lang from 'lang';

const langContext = lang.home;

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__contact-container flex flex-dc">
        <Nav icon="message" title={langContext.contact} />
        <ContactBody />
      </div>
    );
  }
}
