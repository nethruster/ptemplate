import React from 'react';

import Icon from './../partials/icon.jsx';

export default class WorkItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.getLinksTags = this.getLinksTags.bind(this);
  }
  getLinksTags() {
    var resp = [];
    if(this.props.work.siteUrl) {
      resp.push(
        <a href={this.props.work.siteUrl} key={resp.length} target="_blank" rel="noopener" title="Project Website" className="flex flex-dc flex-full-center">
          <Icon iconName="web" />
          <p>Visit Website</p>
        </a>
      )
    }
    if(this.props.work.sourceCodeUrl) {
      resp.push(
        <a href={this.props.work.sourceCodeUrl} key={resp.length} target="_blank" rel="noopener" title="Project Source Code" className="flex flex-dc flex-full-center">
          <Icon iconName="code" />
          <p>Source Code</p>
        </a>
      )
    }
    return resp;
  }
  render() {
    let cateoriyTags = this.props.work.categories.map((category, i) => <span key={i}>{category}</span>);
    let links = this.getLinksTags();

    return (
      <div className="pt-content-card__body__work-items__item flex">
        <img className="pt-content-card__body__work-items__item__image" src={this.props.work.img} alt="Project Title" />
        <div className="pt-content-card__body__work-items__item__data flex flex-dc flex-sb">
          <h4>{this.props.work.title}</h4>
          <p>{this.props.work.description}</p>
          <div className="pt-content-card__body__work-items__item__data__tags">
            {cateoriyTags}
          </div>
        </div>
        <div className="pt-content-card__body__work-items__item__buttons flex flex-dc">
          {links}
        </div>
      </div>
    );
  }
}
