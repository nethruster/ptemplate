import { formUrl } from '../config'
import lang from 'lang'

const langContext = lang.contact.form.validation

function validateName (name) {
  return !!name
}

function validateEmail (email) {
  if (email && email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    return true
  }

  return false
}

function validateMessage (message) {
  return !!message
}

function validateGRecaptchaResponse (gRecaptchaResponse) {
  return !!gRecaptchaResponse
}

async function sendData (name, email, message, gRecaptchaResponse) {
  let postData = JSON.stringify({
    'name': name,
    'mail': email,
    'msg': message,
    'g-recaptcha-response': gRecaptchaResponse
  })

  return fetch(formUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: postData
  })
}

function sendToForm (name, email, message, gRecaptchaResponse) {
  return new Promise((resolve, reject) => {
    if (!validateName(name)) {
      return reject(String(langContext.invalid_name))
    }

    if (!validateEmail(email)) {
      return reject(String(langContext.invalid_email))
    }

    if (!validateMessage(message)) {
      return reject(String(langContext.invalid_message))
    }

    if (!validateGRecaptchaResponse(gRecaptchaResponse)) {
      return reject(String(langContext.invalid_grecaptcha))
    }

    sendData(name, email, message, gRecaptchaResponse)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve(String(langContext.success))
        } else {
          reject(String(langContext.server_error))
        }
      })
      .catch(err => {
        reject(String(langContext.conection_error))
      })
  })
}

export default sendToForm
