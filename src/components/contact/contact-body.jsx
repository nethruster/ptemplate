import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';

import Icon from '../partials/icon.jsx';

import sendToForm from '../../helpers/send-to-form.js';

import { profile } from '../../config.js'

const CloseButton = ({ closeToast }) => (
  <span className="toastify-dismiss">Close</span>
);

export default class ContactBody extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      captchaValue: ""
    };
    
    this.captcha = null;

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCaptchaChange = this.onCaptchaChange.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
  }

  notify (text) {
    toast(text, {
        closeButton: <CloseButton />,
        autoClose: 5000}
      )
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    this.captcha.execute();

      sendToForm(
        this.state.name,
        this.state.email,
        this.state.message,
        this.state.captchaValue)
        .then(message => {
          this.notify(message);
        })

    this.captcha.reset();
  }
  onCaptchaChange(value) {
    if(value === null) {
      return;
    }
    console.log(value);
    this.setState({captchaValue: value});
  }

  onInputValueChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    
    if(e.target.value) {
      e.target.nextElementSibling.classList.add('has-content');
    } 
    else {
      e.target.nextElementSibling.classList.remove('has-content');
    }
  }

  render() {
    const socialIcons = profile.social.map((element, i) => (
      <a href={element.url} key={i} target="_blank" title={element.iconName}>
        <div className="pt-content-card__body__contact__social__item flex flex-full-center"><Icon iconName={element.iconName} />&nbsp;{element.text}</div>
      </a>
    ));

    return (
      <div className="pt-content-card__body pt-content-card__body__contact flex">
      <ReCAPTCHA
        ref={(el) => {this.captcha = el}}
        className="recaptcha"
        size="invisible"
        sitekey="6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu"
        onChange={this.onCaptchaChange}
      />

      <ToastContainer 
        position="bottom-left"
        type="default"
      />
      
      {
        profile.social.length > 0 &&
        <div className="pt-content-card__body__contact__social flex flex-dc flex-full-center">
          {socialIcons}
        </div>
      }
        <div className="pt-content-card__body__contact__form flex flex-main-center">
          <form className="flex flex-dc flex-full-center" onSubmit={this.onFormSubmit}>
            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <input id="name" className="pt-content-card__body__contact__form__input" type="text" onChange={this.onInputValueChange}/>
              <label htmlFor="name" className="pt-content-card__body__contact__form__label">What's your name?</label>
              <svg className="line" viewBox="0 0 40 2" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="focus" />
                <path d="M0 1 L40 1" className="error" />
                <path d="M0 1 L40 1" className="valid" />
              </svg>
            </div>
            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <input id="email" className="pt-content-card__body__contact__form__input" type="email" onChange={this.onInputValueChange}/>
              <label htmlFor="email" className="pt-content-card__body__contact__form__label">What's your email?</label>
              <svg className="line" viewBox="0 0 40 2" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="focus" />
                <path d="M0 1 L40 1" className="error" />
                <path d="M0 1 L40 1" className="valid" />
              </svg>
            </div>
            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <textarea id="message" className="pt-content-card__body__contact__form__textarea" rows="6" onChange={this.onInputValueChange}/>
              <label htmlFor="message" className="pt-content-card__body__contact__form__label">Please, explain yourself:</label>
              <svg className="line" viewBox="0 0 40 2" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="focus" />
                <path d="M0 1 L40 1" className="error" />
                <path d="M0 1 L40 1" className="valid" />
              </svg>
            </div>

            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <button className="pt-content-card__body__contact__form__send-button flex flex-full-center pointer">Send&nbsp;<Icon iconName="send" /></button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
