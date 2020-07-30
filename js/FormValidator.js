export { FormValidator };

class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  enableValidation = () => {
    this._checkInputs(this._form)
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault()
    })
  }

  _checkInputs = (form) => {
    this._inputList = Array.from(form.querySelectorAll(this._inputSelector));
    this._buttonActive = form.querySelector(this._submitButtonSelector);
    this._inactiveButton = form.querySelector(this._inactiveButtonClass);
    this._inputList.forEach(currentInput => {
      this._toggleButtons(currentInput, this._inputList)
      currentInput.addEventListener('input', () => {
        this._toggleButtons(currentInput, this._inputList)
        this._getError(currentInput)
      })
    });

  }
  _enableButton = () => {
    this._buttonActive.classList.remove('popup__save_disabled');
    this._buttonActive.removeAttribute('disabled');
  }
  _disableButton = () => {
    this._buttonActive.classList.add('popup__save_disabled');
    this._buttonActive.setAttribute('disabled', true);
  }

  resetForm = () => {
    this._disableButton();
  }
  saveFormResult = () => {
    this._enableButton();
  }

  _toggleButtons = (currentInput) => {
    if (this._checkValidity(currentInput, this._inputList)) {
      this._enableButton();
    }
    else {
      this._disableButton();
    }
  }
  _checkValidity = (currentInput) => {
    return this._inputList.every(function (currentInput) {
      return currentInput.validity.valid;
    });
  }

  _showInputError = (currentInput) => {
    const errorPlace = this._getErrorPlace(currentInput);
    errorPlace.classList.add(this._errorClass);
    errorPlace.textContent = currentInput.validationMessage;
  }
  _removeInputError(currentInput) {
    const errorPlace = this._getErrorPlace(currentInput)
    errorPlace.classList.remove(this._inputErrorClass)
    errorPlace.textContent = '';
  }
  _getError = (currentInput) => {
    if (!currentInput.validity.valid) { this._showInputError(currentInput) }
    else { this._removeInputError(currentInput) }
  }
  _getErrorPlace(currentInput) {
    const getInputName = currentInput.getAttribute('name');
    const errorPlace = document.getElementById(`${getInputName}-error`);
    return errorPlace;
  }
}