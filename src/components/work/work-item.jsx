import React from 'react'

import Icon from './../partials/icon.jsx'

import lang from 'lang'

import { missingProjectIcon } from '../../config'

const langContext = lang.work

export default class WorkItem extends React.PureComponent {
  constructor (props) {
    super(props)

    this.getLinkTags = this.getLinkTags.bind(this)
  }

  getLinkTags () {
    let linkTags = []

    if (this.props.work.siteUrl) {
      linkTags[linkTags.length] = (
        <a href={this.props.work.siteUrl} key={linkTags.length} target='_blank' rel='noopener' title={`${this.props.work.title} Website`} className='flex flex-dc flex-full-center'>
          <Icon iconName='web' />
          <p>{langContext.website}</p>
        </a>
      )
    }

    if (this.props.work.sourceCodeUrl) {
      linkTags[linkTags.length] = (
        <a href={this.props.work.sourceCodeUrl} key={linkTags.length} target='_blank' rel='noopener' title={`${this.props.work.title} Source Code`} className='flex flex-dc flex-full-center'>
          <Icon iconName='code' />
          <p>{langContext.source}</p>
        </a>
      )
    }

    return linkTags
  }

  render () {
    let categoryTags = this.props.work.categories.map((category, i) => <span key={i}>{category}</span>)
    let linkTags = this.getLinkTags()

    return (
      <div className='pt-content-card__body__work-items__item flex'>
        <div className='pt-content-card__body__work-items__item__image flex flex-full-center'>
          <img src={this.props.work.img || missingProjectIcon} alt={`${this.props.work.title} Icon`} />
        </div>
        <div className='pt-content-card__body__work-items__item__data flex flex-dc flex-sb'>
          <h4>{this.props.work.title}</h4>
          <p>{this.props.work.description}</p>
          <div className='pt-content-card__body__work-items__item__data__tags'>
            {categoryTags}
          </div>
        </div>
        {
          (this.props.work.sourceCodeUrl || this.props.work.siteUrl)
            ? <div className='pt-content-card__body__work-items__item__buttons flex flex-dc'>
              {linkTags}
            </div>
          : null
        }
      </div>
    )
  }
}
