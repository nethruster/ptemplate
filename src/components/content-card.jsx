import React from 'react';

export default class ContentCard extends React.Component {
  render () {
    return (
      <div className="pt-content-card">
        <div className="pt-content-card__header flex flex-dc flex-main-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="none" className="pt-content-card__header__background">
            <polygon points="0,200 200,0 200,200"/>
          </svg>
          <div className="pt-content-card__header__image flex flex-main-center">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/a9/8d/33/a98d336578c49bd121eeb9dc9e51174d--adobe-illustrator-smileys.jpg" alt="User" />
          </div>
          <h1 className="pt-content-card__header__title-name ta-c">Guillem Arias</h1>
          <p className="pt-content-card__header__title-desc ta-c">Front-end developer</p>
        </div>
      </div>
    );
  }
}