import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';
//console.log(email);

let dataImput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', onImputForm);
onSaveDataInput();

function onImputForm() {
  dataImput.email = email.value;
  dataImput.message = message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataImput));
}
//Отслеживай на форме событие input, и каждый раз записывай в локальное
//хранилище объект с полями email и message, в которых сохраняй текущие
//значения полей формы.
function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(dataImput);
}
//При сабмите формы очищай хранилище и поля формы, а также выводи
//объект с полями email, message и текущими их значениями в консоль.
function onSaveDataInput() {
  const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (saveData) {
    email.value = saveData.email;
    message.value = saveData.message;
  }
}
//При загрузке страницы проверяй состояние хранилища, и если там
// есть сохраненные данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
