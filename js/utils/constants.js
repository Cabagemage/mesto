export const popupButtonEdit = document.querySelector('.profile__edit');
export const popupButtonAdd = document.querySelector('.profile__add');
//popups
export const popupEdit = document.querySelector('.popup_function_edit');
export const popupAdd = document.querySelector('.popup_function_add');
export const popupOpenImage = document.querySelector('.popup_function_image');
export const popupImageWindow = document.querySelector('.image');
export const popupImageText = document.querySelector('.popup__container_content_name');
//close popups
export const closePopupButton = document.querySelector('.popup__close');
export const closePopupEdit = popupEdit.querySelector('.popup_close_edit');
export const closePopupAdd = popupAdd.querySelector('.popup_close_add');
export const closePopupImage = popupOpenImage.querySelector('.popup__close_current_image');
// popups forms/inputs
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__subtitle');
export const formElementEdit = document.querySelector('.popup__form_function_edit');
export const formElementAdd = document.querySelector('.popup__form_function_add');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputJob = document.querySelector('.popup__input_type_job');
export const inputPlace = document.querySelector('.popup__input_type_place');
export const inputLink = document.querySelector('.popup__input_type_link');
export const cardListSelector = '.grid-card-template';
export const cardList = document.querySelector('.grid-card-template')
export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  formSelector: '.popup__form',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
export const userValues = {
  name: profileName,
  job: profileJob
}

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  },
];