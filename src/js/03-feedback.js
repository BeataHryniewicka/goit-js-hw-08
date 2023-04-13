//import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const btnEl = document.querySelector('button[type = "submit"]');
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[type = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');

const fillForm = () => {
  // obiekt z polami email i message,
  const data = {
    email: emailEl.value,
    message: messageEl.value,
  };
  //zapisanie danych do local storage
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

//funkcja odczytująca i zapisująca zmiany
const updateForm = () => {
  const updateItem = JSON.parse(
    localStorage.getItem(`feedback-form-state` || '')
  );
  emailEl.value = updateItem.email || '';
  messageEl.value = updateItem.message || '';
};
//funkcaj usuwająca dane z local storage, czyszcząca formularz, drukujaca pusty juz obiekt data
const clearForm = ev => {
  ev.preventDefault();
  console.log(data);
  localStorage.clear();
  //   removeItem('feedback-form-state');
  formEl.reset();
};
// const submit = e => {
//   e.preventDefault();
//   console.log(data);
//   localStorage.clear();
//   formEl.reset();
// };

updateForm();
formEl.addEventListener('input', throttle(fillForm, 500));
btnEl.addEventListener('submit', clearForm);
