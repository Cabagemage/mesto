
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(`${popupSelector}`);
        this._buttonToClose = this._popupSelector.querySelector('.popup__close');
        this._handleEscToClose = this._handleEscToClose.bind(this)
        this._handleOverlayToClose = this._handleOverlayToClose.bind(this)
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscToClose);
    }
    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscToClose);
    }
    _handleEscToClose(evt) {
        if (evt.key === 'Escape') { this.close() }
    }
    _handleOverlayToClose(e) {
        if (e.target !== e.currentTarget) { return }
        this.close();
    }
    setEventListeners() {
        this._buttonToClose.addEventListener('click', () => {
            this.close(); 
        });
        this._popupSelector.addEventListener('click', this._handleOverlayToClose)
    }
}