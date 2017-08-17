import React from 'react';

import Nav from '../components/partials/nav.jsx';
import WorkBody from '../components/work/work-body.jsx';

export default class Work extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__work-container flex flex-dc">
        <Nav icon="folder" title="my work" />
        <WorkBody />
      </div>
    );
  }
}
