const enableValidationConfig = {
  formSelector: '.form',
  inputSelector: '.form__text-input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClavisibless: 'form__text-input_error',
  errorClass: 'popup__error_visible'
};
  
const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);

  if(input.validity.valid) {
      error.textContent = '';
      error.classList.remove(config.errorClass);
      input.classList.remove(config.inputErrorClavisibless);
  } else {
      error.textContent = input.validationMessage;
      error.classList.add(config.errorClass);
      input.classList.add(config.inputErrorClavisibless);
  }
}

const toggleButton = (inputs, button, config) => {
  const isFormValid = inputs.every(input => input.validity.valid);

  if(isFormValid) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = '';
  } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = 'disabled';
  }
};



const enableValidation = (config ) =>  {
  const {formSelector, inputSelector, submitButtonSelector, ...restConfig} = config
  const forms = [...document.querySelectorAll(formSelector)];  
  forms.forEach(form => {
      const inputs = [...form.querySelectorAll(inputSelector)];
      const button = form.querySelector(submitButtonSelector);
      inputs.forEach(input => {
          input.addEventListener('input', () => {
              checkInputValidity(input, restConfig);
              toggleButton(inputs, button, restConfig);
          });
      });
  });
};
enableValidation(enableValidationConfig);
