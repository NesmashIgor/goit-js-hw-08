import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const submitButton = document.querySelector('button[type=submit]');

let emailInput = form.email;
let messageInput = form.message;

let feedbackData = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state') !== null) {
  let abc = JSON.parse(localStorage.getItem('feedback-form-state'));
  feedbackData.email = abc.email;
  feedbackData.message = abc.message;
  emailInput.value = abc.email;
  messageInput.value = abc.message;
}

let throttledData = throttle(getDataLocalStorage, 500);
let throttledLogData = throttle(loggedData, 500);

function getDataLocalStorage() {

  feedbackData.email = emailInput.value;
  feedbackData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}

function loggedData(e) {

   e.preventDefault()

  if (emailInput.value === '' || messageInput.value === '') {
    alert('!!!!!!!!!!');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('feedback-form-state');
  }
}


form.addEventListener('input', throttledData);
form.addEventListener('submit', throttledLogData);