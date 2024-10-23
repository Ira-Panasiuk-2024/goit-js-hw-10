import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Запобігаю стандартній поведінці форми

  const delay = Number(form.delay.value); // Отримую значення затримки
  const state = form.state.value; // Отримую вибраний стан

  // Створюю проміс
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробляю проміс
  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight', // Позиція повідомлення
        timeout: 5000, // Тривалість показу повідомлення
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight', // Позиція повідомлення
        timeout: 5000, // Тривалість показу повідомлення
      });
    });
});
