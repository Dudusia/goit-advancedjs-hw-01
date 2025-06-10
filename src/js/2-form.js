let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? formData;

const form = document.querySelector('.feedback-form');

form.elements.message.value = formData.message;
form.elements.email.value = formData.email;

form.addEventListener('input', evt => {
  formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (formData.email === '' || formData.message === '') {
    window.alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData = {
      email: '',
      message: '',
    };
  }
});
