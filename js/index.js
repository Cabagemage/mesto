//Все обязательные замечания, вроде бы, исправлены. 

import { FormValidator } from './FormValidator.js'
import { initialCards } from './initialCards.js';
import { Card } from './Card.js';
export { closeByEscape, popupOpenImage, popupImageWindow, popupImageText };

const popupButtonEdit = document.querySelector('.profile__edit');
const popupButtonAdd = document.querySelector('.profile__add');
//popups
const popupEdit = document.querySelector('.popup_function_edit');
const popupAdd = document.querySelector('.popup_function_add');
const popupOpenImage = document.querySelector('.popup_function_image');
const popupImageWindow = document.querySelector('.image');
const popupImageText = document.querySelector('.popup__container_content_name');
//close popups
const closePopupEdit = popupEdit.querySelector('.popup_close_edit');
const closePopupAdd = popupAdd.querySelector('.popup_close_add');
const closePopupImage = popupOpenImage.querySelector('.popup__close_current_image');
// popups forms/inputs
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const formElementEdit = document.querySelector('.popup__form_function_edit');
const formElementAdd = document.querySelector('.popup__form_function_add');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const inputPlace = document.querySelector('.popup__input_type_place');
const inputLink = document.querySelector('.popup__input_type_link');

const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  formSelector: '.popup__form',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const formValidAdd = new FormValidator(config, formElementAdd);
formValidAdd.enableValidation();
const formValidEdit = new FormValidator(config, formElementEdit);
formValidEdit.enableValidation();

const addNewCard = () => {
  const nameAndLink = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  const createNewCard = createGridCard(nameAndLink, '.grid-card-template');
  createNewCards(createNewCard)
  closePopup(popupAdd)
  inputPlace.value = '';
  inputLink.value = ''
}

function createGridCard(data, templateSelector) {
  const card = new Card(data, templateSelector)
  const gridCard = card.generateCard();
  return gridCard
}

const createNewCards = (item) => {
  document.querySelector('.elements').prepend(item)
}

const createDefaultCards = (data) => {
  const defaultCards = createGridCard(data, '.grid-card-template');
  document.querySelector('.elements').append(defaultCards)

}

const renderCards = () => {
  initialCards.forEach(data => {
    createDefaultCards(data)
  })
}

renderCards()

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeByEscape);
}

function closeByEscape(evt) {
  const closeEachPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(closeEachPopup)
  }
}

const closeByOverlay = function (e) {
  if (e.target !== e.currentTarget) { return }
  closePopup(e.currentTarget);
}

closePopupEdit.addEventListener('click', function () {
  closePopup(popupEdit);
})

closePopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
})

popupButtonEdit.addEventListener('click', function () {
  openPopup(popupEdit, formValidEdit);
  formValidEdit.saveFormResult();
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
})

popupButtonAdd.addEventListener('click', function () {
  openPopup(popupAdd, formValidAdd);
  formValidAdd.resetForm()
})

closePopupImage.addEventListener('click', function () {
  closePopup(popupOpenImage);
});

formElementAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addNewCard()
});

popupEdit.addEventListener('click', closeByOverlay);
popupOpenImage.addEventListener('click', closeByOverlay);
popupAdd.addEventListener('click', closeByOverlay);

formElementEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
});