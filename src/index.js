import './index.css'; 
import FormValidator from './components/FormValidator.js'
import Card from './components/Card.js';
import Section from './components/Section.js'
import PopupWithImage from './components/Popup.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import {
  popupButtonEdit, popupButtonAdd, closePopupEdit, closePopupAdd, closePopupImage,
  formElementEdit, formElementAdd, inputName, inputJob, config, initialCards, userValues
} from './utils/constants.js'


const formValidAdd = new FormValidator(config, formElementAdd);
formValidAdd.enableValidation();
const formValidEdit = new FormValidator(config, formElementEdit);
formValidEdit.enableValidation();


const popupImage = new PopupWithImage('.popup_function_image')
popupImage.setEventListeners()

function createNewCard(data) {

  const createCard = new Card({
    data, handleCardClick: () => {

      this._element.querySelector('.grid-card__photo').addEventListener('click', () => popupImage.open())
    }
  }, '.grid-card-template');

  const getNewCard = createCard.generateCard()
  defaultSection.addItemPrepend(getNewCard)
}

const defaultSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      createNewCard(data)
    }
  }, '.elements')


defaultSection.renderAppend()


const popupAdd = new PopupWithForm('.popup_function_add',
  {
    handleFormSubmit: (data) => {
      createNewCard(data)

      popupAdd.closePopup()
    }
  })
popupAdd.setEventListeners()

const userInformation = new UserInfo(userValues)

const popupToEdit = new PopupWithForm('.popup_function_edit',
  {
    handleFormSubmit: (data) => {
      userInformation.setUserInfo(data)
      popupToEdit.closePopup()
    }
  })
popupToEdit.setEventListeners()



closePopupEdit.addEventListener('click', function () {
  popupToEdit.closePopup()
})

closePopupAdd.addEventListener('click', function () {
  popupAdd.closePopup();
})

popupButtonEdit.addEventListener('click', () => {
  const getInfo = userInformation.getUserInfo()
  inputName.value = getInfo.name;
  inputJob.value = getInfo.job;
  popupToEdit.openPopup()


})

popupButtonAdd.addEventListener('click', () => {
  popupAdd.openPopup();
  formValidAdd.resetForm()
})

closePopupImage.addEventListener('click', function () {
  popupImage.closePopup()
});
