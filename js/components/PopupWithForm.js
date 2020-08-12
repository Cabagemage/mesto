import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }){
        super(popupSelector)
        this._popupForm = popupForm;
        this._handleFormSubmit = handleFormSubmit;
    }
    
    _getInputValues(){
        this._input = this._popupSelector.querySelectorAll('.popup__inputs');
        this._formValues = {};
        this._input.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return input.value     
        }
    setEventListeners(){
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputs = this._getInputValues();

        })
    }
    closePopup(){
        super.closePopup()
        this._popupSelector.querySelector(this._popupForm).reset();
    }
}