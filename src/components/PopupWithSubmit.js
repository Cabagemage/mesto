import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popupSelector.querySelector('.popup__form_function_remove')
    }
    setSubmitAction(handleSubmit){
        this.handleSubmitCallback = handleSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleSubmitCallback()
        })
    }
    close() {
        super.close()
    }
}