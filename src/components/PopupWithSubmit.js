import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        
    }
    removeThisCard(handleDelete){
        this.handleDeleteIconClick = handleDelete;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.removeThisCard()
            this.close()
        })
    }
    close() {
        super.close()
        
    }
}