
const form = document.querySelector('.signup-form');
const inputs = form.querySelectorAll('.signup-input');
const errorMessages = form.querySelectorAll('.error-message');
const errorIcons = form.querySelectorAll('.error-icon');
let isValid = true;

form.addEventListener('submit', function (event) {
    validateForm();
    if (!isValid) {
        event.preventDefault();
    }
});

inputs.forEach((input) => {
  input.addEventListener('input', validateForm);
});

function showError(input, errorMessage, errorIcon) {
  input.classList.add('error-state');
  errorMessage.style.display = 'block';
  errorIcon.style.display = 'inline';
}

function clearError(input, errorMessage, errorIcon) {
  input.classList.remove('error-state');
  errorMessage.style.display = 'none';
  errorIcon.style.display = 'none';
}

function validateForm() {
  // Validate inputs
  inputs.forEach(input => {
    const value = input.value.trim();
    const errorMessage = input.parentElement.nextElementSibling;
    const errorIcon = input.nextElementSibling

    if (input.id === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if 
        (!value)  {
          isValid = false;
          errorMessage.textContent = 'Email cannot be empty'
          showError(input, errorMessage, errorIcon);
        } else if 
        (!emailPattern.test(value)) {
            isValid = false;
            errorMessage.textContent = 'Looks like this is not an email'
            showError(input, errorMessage, errorIcon);
        } else {
          clearError(input, errorMessage, errorIcon);
        }
    } else {
        if (!value) {
            isValid = false;
            showError(input, errorMessage, errorIcon);
        } else {
          clearError(input, errorMessage, errorIcon);
        }
    }
  });
}
