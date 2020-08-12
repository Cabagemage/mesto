import {closePopupButton} from '../utils/constants.js'
export default class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector
        this._popupElement = document.querySelector(`${popupSelector}`);
    }
    openPopup(){
        this._popupElement.classList.add('popup_opened');
        this._popupElement.addEventListener('keyup', () => this._handleEscToClose());
    }
    closePopup(){
        this._popupElement.classList.remove('popup_opened');
        this._popupElement.removeEventListener('keyup', () => this._handleEscToClose());
    }
    _handleEscToClose(e){
        if(e.key === 'Escape'){closePopup()}
        }

    setEventListeners(){
          closePopupButton.addEventListener('click', () => {
            this.closePopup(e);
          });  
    }
    
}