import FormValidator from '../components/FormValidator.js'
import  Card  from '../components/Card.js';
import Section from '../components/Section.js'
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {popupButtonEdit, popupButtonAdd,  popupOpenImage, closePopupEdit, closePopupAdd, closePopupImage, 
  profileName, profileJob, formElementEdit, formElementAdd, inputName, inputJob, config, initialCards, inputPlace, inputLink} from '../utils/constants.js'
import {closePopup, openPopup, closeByOverlay} from '../utils/utils.js'


const formValidAdd = new FormValidator(config, formElementAdd);
formValidAdd.enableValidation();
const formValidEdit = new FormValidator(config, formElementEdit);
formValidEdit.enableValidation();

const defaultSection = new Section(
  {items: initialCards, 
  renderer: (data) =>
{
const card = new Card({data, handleCardClick: () => {
  const imagePopup = new PopupWithImage(popupOpenImage)
  this._element.querySelector('.grid-card__photo').addEventListener('click', () => imagePopup.open())}
 }, '.grid-card-template');

const getCard = card.generateCard()
defaultSection.addItem(getCard)
}
}, '.elements')
defaultSection.renderAppend()

const popupAdd = new PopupWithForm({popupSelector, handleFormSubmit: () => {
const addPopup = this._popupSelector.querySelector('.popup_function_edit')

}})

const popupEdit = new PopupWithForm();





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
  const nameAndLink = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  const cardTwo = new Card(nameAndLink, '.grid-card-template').generateCard();
  defaultSection.addItemPrepend(cardTwo)
  console.log(cardTwo)
  closePopup(popupAdd)
  console.log(nameAndLink)
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