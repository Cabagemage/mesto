import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popupSelector.querySelector('.popup__form_function_remove')
    }
    removeThisCard(handleDelete){
        this.handleDeleteCallback = handleDelete;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleDeleteCallback()
            this.close()
        })
    }
    close() {
        super.close()
        
    }
}