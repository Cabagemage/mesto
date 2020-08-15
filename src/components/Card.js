export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this.name = data.name;
    this.link = data.link;
    this.alt = data.alt;
    this.handleCardClick = handleCardClick;
    this.templateSelector = templateSelector;
  }
  // метод получение темплейта 
  _gridCardTemplate() {
    const gridCard = document
      .querySelector(this.templateSelector)
      .content
      .querySelector('.grid-card')
      .cloneNode(true);
    return gridCard
  }

  generateCard() {
    this._element = this._gridCardTemplate();
    this._photo = this._element.querySelector('.grid-card__photo')
    this._title = this._element.querySelector('.grid-card__title')
    this._photo.src = this.link;
    this._photo.alt = `${this.name}`;
    this._title.textContent = this.name;
    this._setEventListeners();
    return this._element;
  }

  // метод удаления карточки
  _handleRemoveCard() {
    this._element.remove();
    this._element = null;
  }
  // метод установки или удаления лайка
  _handleLikeCard() {
    this._element.querySelector('.grid-card__like-button').classList.toggle('grid-card__like-button_like_active');
  }
  //Метод открытия попапа с изображением

  //Метод установки слушателей 
  _setEventListeners() {
    this._element.querySelector('.grid-card__photo').addEventListener('click', () => { this.handleCardClick(); });
    {
      this._element.querySelector('.grid-card__like-button').addEventListener('click', () => { this._handleLikeCard(); });
    }
    {
      this._element.querySelector('.grid-card__remove').addEventListener('click', () => { this._handleRemoveCard(); });
    }
  }
}