export {Card};
class Card {
    constructor(data) {
      this.name = data.name;
      this.link = data.link;
    }
    // метод получение темплейта 
    _gridCardTemplate() {
      const gridCard = document
        .querySelector('.grid-card-template')
        .content
        .querySelector('.grid-card')
        .cloneNode(true);
      return gridCard
    }
  
    generateCard() {
      this._element = this._gridCardTemplate();
      this._element.querySelector('.grid-card__photo').src = this.link;
      this._element.querySelector('.grid-card__photo').alt = `${this.name}`;
      this._element.querySelector('.grid-card__title').textContent = this.name;
      this._setEventListeners();
      return this._element;
    }
    // метод удаления карточки
    _handleRemoveCard() {
      this._element.remove();
    }
    // метод установки или удаления лайка
    _handleLikeCard() {
      this._element.querySelector('.grid-card__like-button').classList.toggle('grid-card__like-button_like_active');
    }
    //Метод открытия попапа с изображением
    _handleOpenPopup() {
      const image = this.link;
      const name = this.name;
      popupImageWindow.src = image;
      popupImageText.textContent = `${name}`;
      popupImageWindow.alt = `${name}`;
      popupOpenImage.classList.add('popup_opened');
    }
  //Метод установки слушателей 
    _setEventListeners() {
      this._element.querySelector('.grid-card__photo').addEventListener('click', () => {
        this._handleOpenPopup();
        document.addEventListener('keyup', closeByEscape);
      });
      {
        this._element.querySelector('.grid-card__like-button').addEventListener('click', () => {
          this._handleLikeCard();
        });
      }
      {
        this._element.querySelector('.grid-card__remove').addEventListener('click', () => {
          this._handleRemoveCard();
        });
      }
    }
  }