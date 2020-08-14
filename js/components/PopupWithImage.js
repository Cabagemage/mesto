import Popup from '../components/Popup.js';
import { popupImageWindow, popupImageText } from '../utils/constants.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this.link = image;
        this.name = name
    }
    openPopup() {
        const image = this.link;
        const name = this.name;
        popupImageWindow.src = image;
        popupImageText.textContent = `${name}`;
        popupImageWindow.alt = `${name}`;
        super.openPopup();
    }

}