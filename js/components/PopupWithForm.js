import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector)
        this.handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._input = this._popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._input.forEach(input => {
            console.log(input.name, input.value)
            this._formValues[input.name] = input.value;
        })
        console.log(this._formValues)
        return this._formValues
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const data = this._getInputValues();
            this.handleFormSubmit(data)
        })
    }
    closePopup() {
        super.closePopup()
        this._popupSelector.querySelector('.popup__form').reset()
    }
}