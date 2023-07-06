import throttle from 'lodash.throttle';

const refs = {
    email: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
    form: document.querySelector('form'),
  };

  let feedbackData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  const recoverData = () => {
    refs.email.value = feedbackData.email || '';
    refs.textarea.value = feedbackData.message || '';
  };
  recoverData();
  const updateFeedbackData = event => {
    feedbackData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
  };
  const formSubmit = event => {
    event.preventDefault();
    console.log(feedbackData);
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    feedbackData = {};
  };
  refs.form.addEventListener('input', throttle(updateFeedbackData, 500));
  refs.form.addEventListener('submit', formSubmit);