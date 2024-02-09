const form = document.querySelector('.feedback-form');

function savedState(form) {
  const userMail = form.email.value.trim();
  const message = form.message.value.trim();
  return {
    userMail,
    message,
  };
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = savedState(form);
  if (data.userMail && data.message) {
    console.log(data);
    localStorage.clear();
    form.reset();
  } else {
    console.log('Поля форми не заповнені.');
  }
});

form.addEventListener('input', e => {
  e.preventDefault();
  const data = savedState(e.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem('feedback-form-state', jsonData);
});

function loadState() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { userMail, message } = JSON.parse(savedData);

    form.email.value = userMail;
    form.message.value = message;
  }
}

loadState();
