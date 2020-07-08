import React from 'react';

import Icon from '../partials/icon.jsx';

import sendToForm from '../../helpers/send-to-form.js';

import { profile, ReCAPTCHAKey } from '../../config.js';

import lang from 'lang';

const langContext = lang.contact;

// This need to be it's own function or webpack optimizes it out of existence
async function loadTostify() {
  let toastify = await import(/*webpackChunkName: "toastify"*/'react-toastify');
  this.setState({ toastify: toastify });
}
// This need to be it's own function or webpack optimizes it out of existence
async function loadRecaptcha() {
  let ReCAPTCHA = (await import(/*webpackChunkName: "gRecaptcha"*/'preact-grecaptcha')).default;
  this.setState({ ReCAPTCHA: ReCAPTCHA });
}

const CloseButton = ({ closeToast }) => (
  <span className="toastify-dismiss" onClick={closeToast}>{langContext.toast.close}</span>
);

export default class ContactBody extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      isFormLoading: false,
      toastify: {
        toast: null,
        ToastContainer: null
      },
      ReCAPTCHA: null
    };
    
    this.captcha = null;

    loadTostify.bind(this)();

    loadRecaptcha.bind(this)();

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCaptchaChange = this.onCaptchaChange.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
  }

  notify (text, type) {
    switch(type) {
      case "Success":
        this.state.toastify.toast.success(text, {
          closeButton: <CloseButton />,
          closeOnClick: false 
        })
        break;
      case "Error":
        this.state.toastify.toast.error(text, {
          closeButton: <CloseButton />,
          closeOnClick: false 
        })
        break;
      default:
        this.state.toastify.toast(text, {
          closeButton: <CloseButton />,
          closeOnClick: false 
        })
        break;
    }
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    this.captcha.execute();
  }
  
  onCaptchaChange(value) {
    if(value === null) {
      return;
    }

    this.setState({isFormLoading: true});
    sendToForm(
      this.state.name,
      this.state.email,
      this.state.message,
      value)
      .then(message => {
        this.notify(message, "Success");
        this.captcha.reset();
        this.setState({isFormLoading: false});
      })
      .catch(err => {
        this.notify(err, "Error");
        this.captcha.reset();
        this.setState({isFormLoading: false});
      })
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
      <a href={element.url} key={i} rel="noopener" target="_blank" title={element.iconName}>
        <div className="pt-content-card__body__contact__social__item flex flex-full-center"><Icon iconName={element.iconName} />&nbsp;{element.text}</div>
      </a>
    ));

    let isLoading = !this.state.ReCAPTCHA || !this.state.toastify.ToastContainer;

    let buttonContent;

    if (isLoading) {
      buttonContent = (
        <div className={`loader-container flex flex-main-center`}>
            {langContext.loading}
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      )
    } else if (this.state.isFormLoading){
      buttonContent = (
        <div className={`loader-container flex flex-main-center`}>
            {langContext.sending}
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      )
    } else {
      buttonContent = (
        <div className={`flex flex-main-center`}>
            {langContext.send}
        </div>
      )
    }

    return (
      <div className="pt-content-card__body pt-content-card__body__contact flex">
      {
        this.state.ReCAPTCHA && navigator.userAgent != "ReactSnap" ? 
          <this.state.ReCAPTCHA
            ref={(el) => {this.captcha = el}}
            className="recaptcha"
            size="invisible"
            sitekey={ReCAPTCHAKey}
            onChange={this.onCaptchaChange}
          /> : null
      }

      {
        this.state.toastify.ToastContainer ?
          <this.state.toastify.ToastContainer 
            position="bottom-left"
            autoClose={5000}
            type="default"
          /> : null
      }
      
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
              <label htmlFor="name" className="pt-content-card__body__contact__form__label">{langContext.form.name}</label>
              <svg className="line" viewBox="0 0 40 2" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="focus" />
                <path d="M0 1 L40 1" className="error" />
                <path d="M0 1 L40 1" className="valid" />
              </svg>
            </div>
            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <input id="email" className="pt-content-card__body__contact__form__input" type="email" onChange={this.onInputValueChange}/>
              <label htmlFor="email" className="pt-content-card__body__contact__form__label">{langContext.form.email}</label>
              <svg className="line" viewBox="0 0 40 2" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="focus" />
                <path d="M0 1 L40 1" className="error" />
                <path d="M0 1 L40 1" className="valid" />
              </svg>
            </div>
            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <textarea id="message" className="pt-content-card__body__contact__form__textarea" rows="6" onChange={this.onInputValueChange}/>
              <label htmlFor="message" className="pt-content-card__body__contact__form__label">{langContext.form.message}</label>
              <svg className="line" viewBox="0 0 40 2" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="focus" />
                <path d="M0 1 L40 1" className="error" />
                <path d="M0 1 L40 1" className="valid" />
              </svg>
            </div>

            <div className="pt-content-card__body__contact__form__row flex flex-dc flex-main-center">
              <button className="pt-content-card__body__contact__form__send-button flex flex-full-center pointer" disabled={this.state.isFormLoading || isLoading}>
                { buttonContent }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
