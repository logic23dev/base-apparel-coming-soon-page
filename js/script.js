const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');
const errorIcon = document.querySelector('#error-icon');

form.addEventListener('submit', event => {
  event.preventDefault();

  validateEmail();
});

function validateEmail() {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  errorMessage.textContent = '';
  email.setAttribute('aria-invalid', 'false');

  if (email.value === '' || !emailRegExp.test(email.value)) {
    errorMessage.textContent = 'Please provide a valid email';
    errorIcon.style.opacity = 1;
    email.className = 'error-border';
    email.setAttribute('aria-invalid', 'true');
  } else {
    alert('Form submitted successfully!');
  }
}
