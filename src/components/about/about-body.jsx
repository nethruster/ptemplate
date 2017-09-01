import React from 'react';

import Icon from '../partials/icon.jsx';

import linebreakToBr from "../../helpers/linebreak-to-br";

export default class AboutBody extends React.PureComponent {
  render() {
    const {about} = this.props.profile;
    const findMeOnElements = about.findMeOn.map(
      (element, i) => <a className="flex flex-cross-center" key={i} href={element.url} target="_blank"><Icon iconName={element.iconName} iconColor={element.hoverColor} />&nbsp;{element.text}</a>
    )
    
    return (
      <div className="pt-content-card__body pt-content-card__body__about flex flex-main-center">
        <div className="pt-content-card__body__about__presentation flex flex-dc flex-full-center">
           <img src="./assets/avatar.svg" alt="WEBSITE OWNER's Image" />
           <h1 className="ta-c">{linebreakToBr(about.title)}</h1>
        </div>
        <div className="pt-content-card__body__about__details flex flex-dc flex-full-center">
          <p>
            {linebreakToBr(about.description)}
          </p>

          <h3>You'll find me on:</h3>
          <div className="pt-content-card__body__about__details__net-icons flex-sa">
            {findMeOnElements}
          </div>
        </div>
      </div>
    );
  }
}
