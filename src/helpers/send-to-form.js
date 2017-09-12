import "babel-polyfill";
import { formUrl } from "../config";

function validateName(name) {
  return !!name;
}

function validateEmail(email) {
  if (email && email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    return true;
  }

  return false;
}

function validateMessage(message) {
  return !!message;
}

function validateGRecaptchaResponse(gRecaptchaResponse) {
  return !!gRecaptchaResponse;
}

async function sendData(name, email, message, gRecaptchaResponse) {
  let postData = JSON.stringify({
    name,
    email,
    message,
    "g-recaptcha-response": gRecaptchaResponse
  })

  return fetch(formUrl, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: postData
  })
}

function sendToForm(name, email, message, gRecaptchaResponse) {
  return new Promise((resolve, reject) => {
    if (!validateName(name)) {
      return reject("Invalid name");
    }

    if (!validateEmail(email)) {
      return reject("Invalid email");
    }

    if (!validateMessage(message)) {
      return reject("Invalid message");
    }

    if (!validateGRecaptchaResponse(gRecaptchaResponse)) {
      return reject("Invalid gRecaptchaResponse");
    }

    sendData(name, email, message, gRecaptchaResponse)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve("Message sent successfully");
        } else {
          reject("Server returned a an invalid response");
        }
      })
      .catch(err => {
        reject(err);
      });
  }).catch(error => {
    return error;
  })
}

export default sendToForm;
