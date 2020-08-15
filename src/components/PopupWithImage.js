import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this.link = document.querySelector('.image');
        this.name = document.querySelector('.popup__container_content_name')
    }
    open(data) {
        const link = this.link;
        const name = this.name;
        link.src = data.link;
        name.textContent = data.name;
        name.alt = data.name;
        super.open();
    }

}