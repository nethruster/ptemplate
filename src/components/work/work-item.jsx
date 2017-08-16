import React from 'react';

import Icon from './../partials/icon.jsx';

export default class WorkItem extends React.PureComponent {
  render () {
    return (
        <div className="pt-content-card__body__work-items__item flex">
              <img className="pt-content-card__body__work-items__item__image" src="https://www.nethruster.com/assets/img/icons/apple-touch-icon.png" alt="Project Title" />
              <div className="pt-content-card__body__work-items__item__data flex flex-dc flex-sb">
                <h4>Project Title</h4>
                <p>Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.</p>
                <div className="pt-content-card__body__work-items__item__data__tags">
                  <span>Nethruster</span><span>Client</span>
                </div>
              </div>
              <div className="pt-content-card__body__work-items__item__buttons flex flex-dc">
                <a className="flex flex-dc flex-full-center">
                  <Icon iconName="web" />
                  <p>Visit Website</p>
                </a>
                <a className="flex flex-dc flex-full-center">
                  <Icon iconName="code" />
                  <p>Source Code</p>
                </a>
              </div>
        </div>
    );
  }
}