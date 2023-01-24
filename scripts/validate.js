const enableValidationConfig = {
  formSelector: '.form',
  inputSelector: '.form__text-input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClavisibless: 'form__text-input_error',
  errorClass: 'popup__error_visible'
};
  

function hideInputError(input, error, config) {
  error.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClavisibless);
  error.textContent = '';
};


function showInputError(input, error, config) {
  error.textContent = input.validationMessage;
  error.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClavisibless);
};

function checkInputValidity(input, config) {
  const error = document.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    hideInputError(input, error, config);
  } else {
    showInputError(input, error, config);
  }
};

function resetValidation() {
  const config = enableValidationConfig;

  for(form of document.querySelectorAll(config.formSelector)) {
    const button = form.querySelector(config.submitButtonSelector);
    for(input of form.querySelectorAll(config.inputSelector)) {
      const error = document.querySelector(`#${input.id}-error`);
      hideInputError(input, error, config);
    }
    enableButtonState(button, config);
  }
};

function hasInvalidInput (inputs) {
  return !inputs.every(input => input.validity.valid);
};

function enableButtonState (button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', true);
};

function disableButtonState (button, config) {
  button.classList.remove(config.inactiveButtonClass);
  button.removeAttribute('disabled');
};


function toggleButton (inputs, button, config) {
  if (hasInvalidInput (inputs)) {
    enableButtonState (button, config);
  } else {
    disableButtonState (button, config);
  }
};

function setEventListeners(form, config) {
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  const button = form.querySelector(config.submitButtonSelector);
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input, config);
      toggleButton(inputs, button, config);
    });
  });
};


function enableValidation (config) {
  const forms = [...document.querySelectorAll(config.formSelector)];  
  forms.forEach(form => {
    setEventListeners(form, config)
  });
};

enableValidation(enableValidationConfig);
