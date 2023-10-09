
import throttle from "lodash.throttle";

const localStorageKey = 'feedback-form-data';
const form = document.querySelector('.feedback-form');
const throttledSaveFieldValuesToLocalStorage = throttle(saveFieldValuesToLocalStorage, 500);

function saveFieldValuesToLocalStorage() {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

let formData = JSON.parse(localStorage.getItem(localStorageKey) ?? '{}');

form.elements.email.value = formData.email ?? '';
form.elements.message.value = formData.message ?? '';

form.addEventListener('input', (evt) => {
    throttledSaveFieldValuesToLocalStorage();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(localStorage.getItem(localStorageKey));
  localStorage.removeItem(localStorageKey);
  form.reset();
});

