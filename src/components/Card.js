export default class Card {
  constructor({userId, data, handleCardClick, handleLikeClick, handleDislikeClick, handleDeleteIconClick}, templateSelector) {
    this.userId = userId
    this.name = data.name;
    this.link = data.link;
    this.alt = data.alt;
    this.likes = data.likes;
    this._id = data._id;
    this.owner = data.owner;
    this.handleCardClick = handleCardClick;
    this.handleLikeClick = handleLikeClick;
    this.handleDislikeClick = handleDislikeClick;
    this.handleDeleteIconClick = handleDeleteIconClick;
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
// Эта функция должна проверять айдипользовател
  
  generateCard() {
    this._element = this._gridCardTemplate();
    this._photo = this._element.querySelector('.grid-card__photo')
    this._title = this._element.querySelector('.grid-card__title')
    this._removeButton = this._element.querySelector('.grid-card__remove')
    this._likeCounter = this._element.querySelector('.grid-card__like-counter')
    this._likeCounter.textContent = `${this.likes.length}`;
    this._photo.src = this.link;
    console.log(this.owner)
    this.button = this._element.querySelector('.grid-card__like-button');
    this._photo.alt = `${this.name}`;
    this._title.textContent = this.name;
    if(this.owner !== this.userId){this._removeButton.classList.add('grid-card__remove-none')}
    else{this._removeButton.classList.remove('grid-card__remove-none')}
  
    
  

    if (this.likes.find((like) => {  
      return like._id === this.userId
})) {this.button.classList.add('grid-card__like-button_like_active') }

    this._setEventListeners();
    return this._element;
  }
 

  // метод удаления карточки
  handleRemoveCard() {
    this._element.remove();
    this._element = null;
  }

  
 
  setLikesInfo(likes) {
    this.likes = likes;
    this.updateLikes(); // вот этот метод должен обновить лайки в разметке
  }
  
  updateLikes(likes) {

    this._element.querySelector('.grid-card__like-counter').textContent = likes.length
   }

  toggleLike(){
    this.button.classList.toggle('grid-card__like-button_like_active')
  }

  //Метод установки слушателей 
  _setEventListeners() {
    this._element.querySelector('.grid-card__photo').addEventListener('click', () => { this.handleCardClick(); 
    });

    this._element.querySelector('.grid-card__like-button').addEventListener('click', () => { 
      if(this.button.classList.contains('grid-card__like-button_like_active'))
      {this.handleDislikeClick();}
      else(this.handleLikeClick()) 
    })
    
    {
      this._element.querySelector('.grid-card__remove').addEventListener('click', () => { this.handleDeleteIconClick(this._id); 
  
      });
    }
  }
}