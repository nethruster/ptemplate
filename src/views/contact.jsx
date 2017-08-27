import React from 'react';

import Nav from '../components/partials/nav.jsx';
import ContactBody from '../components/contact/contact-body.jsx';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__home-container flex flex-dc">
        <Nav icon="message" title="get in touch" />
        <ContactBody />
      </div>
    );
  }
}
