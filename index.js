'use strict';

const body = document.querySelector('body');
const wrapperNode = document.querySelector('.wrapper');
const titleNode = document.querySelector('.title');
const whatToDoNode = document.querySelector('.what-to-do');
const btnNode = document.querySelector('.js-btn');

btnNode.addEventListener('click', function () {
  titleNode.innerText = 'Ура, теперь не скучно 🔥';

  fetch('http://www.boredapi.com/api/activity/')
    .then(responce => responce.json())
    .then(res => (whatToDoNode.innerText = `${res.activity}`));

  body.classList.add('body_active');
});
