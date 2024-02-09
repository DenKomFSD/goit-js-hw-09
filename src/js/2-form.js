const form = document.querySelector('.feedback-form');
const button = document.querySelector('button');

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
  localStorage.clear();
  form.reset();
});

form.addEventListener('input', e => {
  e.preventDefault();
  const data = savedState(e.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem('feedback-form-state', jsonData);
});

// const savedData = localStorage.getItem('feedback-form-state');
// if (savedData) {
//   const { userMail, message } = JSON.parse(savedData);

//   form.email.value = userMail;
//   form.message.value = message;
// }

function loadState() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { userMail, message } = JSON.parse(savedData);

    form.email.value = userMail;
    form.message.value = message;
  }
}

loadState();
