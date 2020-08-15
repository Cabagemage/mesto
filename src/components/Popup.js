
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(`${popupSelector}`);
        this._button = document.querySelector('.popup__close');
        this._handleEscToClose = this._handleEscToClose.bind(this)
        this._handleOverlayToClose = this._handleOverlayToClose.bind(this)
    }
    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscToClose);
    }
    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscToClose);
    }
    _handleEscToClose(evt) {
        if (evt.key === 'Escape') { this.closePopup() }
    }
    _handleOverlayToClose(e) {
        if (e.target !== e.currentTarget) { return }
        this.closePopup();
    }
    setEventListeners() {
        this._button.addEventListener('click', () => {
            this.closePopup();
        });
        this._popupSelector.addEventListener('click', this._handleOverlayToClose)
    }
}