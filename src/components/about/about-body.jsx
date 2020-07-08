import React from 'react'

import Icon from '../partials/icon.jsx'

import linebreakToBr from '../../helpers/linebreak-to-br'

import lang from 'lang'

const langContext = lang.about

export default class AboutBody extends React.PureComponent {
  render () {
    const {about} = this.props.profile
    const findMeOnElements = about.findMeOn.map(
      (element, i) => (element.url
        ? <a className='flex flex-cross-center' key={i} href={element.url} rel="noopener" target='_blank' title={element.url}><Icon iconName={element.iconName} iconColor={element.hoverColor} />&nbsp;{element.text}</a>
        : <span className='flex flex-cross-center' key={i}><Icon iconName={element.iconName} iconColor={element.hoverColor} />&nbsp;{element.text}</span>
      )
    )

    return (
      <div className='pt-content-card__body pt-content-card__body__about flex flex-full-center'>
        <div className='pt-content-card__body__about__presentation flex flex-dc flex-full-center'>
          <img src={`${__BASE__}assets/${this.props.profile.avatarPath}`} alt={`${this.props.profile.fullName}'s Image`} />
          <h1 className='ta-c'>{linebreakToBr(about.title)}</h1>
        </div>
        <div className='pt-content-card__body__about__details flex flex-dc flex-full-center'>
          <p>
            {linebreakToBr(about.description)}
          </p>

          <h3>{langContext.find_me}</h3>
          <div className='pt-content-card__body__about__details__net-icons flex-sa'>
            {findMeOnElements}
          </div>
        </div>
      </div>
    )
  }
}
