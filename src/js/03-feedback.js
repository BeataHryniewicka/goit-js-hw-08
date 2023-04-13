//import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const btnEl = document.querySelector('button[type = "submit"]');
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');
// obiekt z polami email i message

//funkcja odczytująca i zapisująca zmiany
function updateForm() {
  const updateItem = JSON.parse(
    localStorage.getItem(`feedback-form-state` || '')
  );
  emailEl.value = updateItem.email || '';
  messageEl.value = updateItem.message || '';
}
updateForm();

const fillForm = () => {
  // obiekt z polami email i message
  const data = {
    email: emailEl.value,
    message: messageEl.value,
  };
  //zapisanie danych do local storage
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

//funkcja drukujaca obiekt data, usuwająca dane z local storage, czyszcząca formularz
function clearForm(ev) {
  ev.preventDefault();
  console.log(data);
  localStorage.clear();
  //  removeItem('feedback-form-state');
  formEl.reset();
}

formEl.addEventListener('input', throttle(fillForm, 500));
btnEl.addEventListener('submit', clearForm);
