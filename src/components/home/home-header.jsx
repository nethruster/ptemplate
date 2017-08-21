import React from 'react';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__header flex flex-dc flex-main-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="none" className="pt-content-card__header__background">
          <polygon points="0,200 200,0 200,200" />
        </svg>
        <div className="pt-content-card__header__image flex flex-main-center">
          <img src="./assets/avatar.svg" alt="User" />
        </div>
        <h1 className="pt-content-card__header__title-name ta-c">{this.props.profile.fullname}</h1>
        <p className="pt-content-card__header__title-desc ta-c">{this.props.profile.description}</p>
      </div>
    );
  }
}
