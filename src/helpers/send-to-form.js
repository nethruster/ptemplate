import {FormUrl} from "../config"

function validateName(name) {
  if(name) {
    return true
  }
  return false
}
function validateEmail(email) {
  if(email && email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    return true
  }
  return false
}
function validateMessage(message) {
  if(message) {
    return true
  }
  return false
}
function validateGRecaptchaResponse(gRecaptchaResponse) {
  if(gRecaptchaResponse) {
    return true;
  }
  return false;
}
async function sendData(name, email, message, gRecaptchaResponse) {
  var success;
  var postData = JSON.stringify({
    name,
    email,
    message,
    "g-recaptcha-response": gRecaptchaResponse
  })
  await fetch(FormUrl, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8" 
    },
    body: postData
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      success = true;
    } else {
      success = false;
    }
  })
  .catch(err => {
    success = false;
  })
  return success;
}

async function sendToForm(name, email, message, gRecaptchaResponse) {
  if(!validateName(name)) {
    throw "Invalid name"
  }
  if(!validateEmail(email)) {
    throw "Invalid email"
  }
  if(!validateMessage(message)) {
    throw "Invalid message"
  }
  if(!validateGRecaptchaResponse(gRecaptchaResponse)) {
    throw "Invalid gRecaptchaResponse"
  }
  
  return await sendData(name, email, message, gRecaptchaResponse);
}

export default sendToForm;
