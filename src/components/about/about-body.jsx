import React from 'react';

import Icon from '../partials/icon.jsx';

export default class AboutBody extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__body pt-content-card__body__about flex flex-main-center">
        <div className="pt-content-card__body__about__presentation flex flex-dc flex-full-center">
           <img src="./assets/avatar.svg" alt="WEBSITE OWNER's Image" />
           <h1 className="ta-c">Hey there! <br /> I'm WEBSITE OWNER</h1>
        </div>
        <div className="pt-content-card__body__about__details flex flex-dc flex-full-center">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.
          </p>

          <h3>You'll find me on:</h3>
          <div className="pt-content-card__body__about__details__net-icons flex-sa">
            <a className="flex flex-cross-center"><Icon iconName="location" />&nbsp;Location, Place</a>
            <a className="flex flex-cross-center"><Icon iconName="twitter" />&nbsp;@user</a>
            <a className="flex flex-cross-center"><Icon iconName="email" />&nbsp;email@email.com</a>
            <a className="flex flex-cross-center"><Icon iconName="keybase" />&nbsp;@kuser</a>
          </div>
        </div>
      </div>
    );
  }
}
