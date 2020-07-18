const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);
  const formsArray = Array.from(forms);
  formsArray.forEach(form => {
    checkInputs(form, rest)
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
  })
}

// Функция нахождения инпутов
const checkInputs = (form, { inputSelector, ...rest }) => {
  const input = form.querySelectorAll(inputSelector)
  const inputArray = Array.from(input);
  inputArray.forEach(currentInput => {
    toggleButtons(currentInput, form, inputArray, rest)
    currentInput.addEventListener('input', function () {
      toggleButtons(currentInput, form, inputArray, rest)
      getError(form, currentInput, rest)
    });
  })
}

// Функция переключения кнопок
const toggleButtons = (currentInput, form, inputArray, { submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const buttonActive = form.querySelector(submitButtonSelector);
  if (checkValidity(currentInput, inputArray)) {
    buttonActive.classList.remove(inactiveButtonClass);
    buttonActive.removeAttribute('disabled');
  }
  else {
    buttonActive.classList.add(inactiveButtonClass);
    buttonActive.setAttribute('disabled', true);
  }
}

//Функция проверки валидности конкретного инпута
const checkValidity = (currentInput, inputArray) => {
  {
    return inputArray.every(function (currentInput) {
      return currentInput.validity.valid;
    });
  }
}

// Функция вывода или сокрытия ошибки. 
const getError = (form, currentInput, rest) => {

  if (!currentInput.validity.valid) {
    showInputError(form, currentInput, rest)
  }
  else { removeInputError(form, currentInput, rest) }
}

//Функция нахождения поля ошибки. 
const getErrorPlace = (currentInput) => {
  const getInputName = currentInput.getAttribute('name');
  const errorPlace = document.getElementById(`${getInputName}-error`);
  return errorPlace;
}

// Функция, которая добавляет ошибку
const showInputError = (form, currentInput, { errorClass, ...rest }) => {
  const errorPlace = getErrorPlace(currentInput);
  errorPlace.classList.add(errorClass);
  errorPlace.textContent = currentInput.validationMessage;
};

// Функция, которая скрывает ошибку
const removeInputError = (form, currentInput, { inputErrorClass }, rest) => {
  const errorPlace = getErrorPlace(currentInput)
  errorPlace.classList.remove(inputErrorClass)
  errorPlace.textContent = '';
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
